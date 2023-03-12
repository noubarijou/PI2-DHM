import * as s from './fullactivity.styles';
import { ContainerPage, PageTitle, TableContainer } from 'components';
import Link from 'next/link';
import { InputText } from 'components/input/input-text/InputText';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from 'pages/login/schemas';
import { FiFilter } from 'react-icons/fi';
import { BsCircleFill } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import { useGetAccount } from 'hooks/useAccount/useGetAcctData';
import { useGetAcctActivity } from 'hooks/useAccount/useGetAcctActivity';
import { AcctActivity } from 'hooks/useAccount/useGetAcctActivity/types';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import nookies from 'nookies';
import { useUserStore } from 'store/user';
import { useEffect, useState } from 'react';
import Filter from 'components/filter';
import Pagination from 'components/pagination';
import { pagination, filterByText } from 'utils/tests/filters/filter';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

const FullActivity = () => {
  const router = useRouter();

  useEffect(() => {
    const token = nookies.get(null, { path: '/' })['@digitalmoney:token'];
    if (!token) {
      router.push('/home');
    }
  }, []);
  const { control } = useForm({
    defaultValues: {
      search: ''
    },
    resolver: yupResolver(schemaLogin),
    mode: 'all'
  });
  const user = useUserStore(state => state.user);

  const {
    colors: { primary, secondaryBlack }
  } = useTheme();

  const { data: activityInfo } = useGetAcctActivity(user.id);
  const [openFilter, setOpenFilter] = useState(false);
  const showFilters = (e: any) => {
    e.preventDefault();
    setOpenFilter(!openFilter);
  };
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ContainerPage>
      <PageTitle>Suas atividades</PageTitle>
      <s.InputContainer>
        <s.SearchIcon />
        <InputText
          name="search"
          control={control}
          placeholder="Buscar em suas atividades"
          className="search"
        />
      </s.InputContainer>
      <TableContainer>
        <s.ActivityHeader>
          <p>Suas atividades</p>
          <s.FilterButton onClick={showFilters}>
            <p>Filtrar</p>
            <FiFilter />
          </s.FilterButton>
        </s.ActivityHeader>
        {openFilter && <Filter />}
        {activityInfo &&
          pagination(activityInfo, 10, currentPage).data.map(
            (activity: AcctActivity) => (
              <s.ActivityContainer key={activity.id}>
                <s.ActivityDescription>
                  <BsCircleFill color={primary} size="20" />
                  <s.ActivityDescriptionText>
                    {activity?.description}
                  </s.ActivityDescriptionText>
                </s.ActivityDescription>
                <s.ActivityValue>
                  <s.ActivityDescriptionText>
                    ${activity?.amount}
                  </s.ActivityDescriptionText>
                  <span>
                    {format(new Date(activity?.dated), 'EEEE', { locale: pt })}
                  </span>
                </s.ActivityValue>
              </s.ActivityContainer>
            )
          )}
        {activityInfo && (
          <Pagination
            currentPage={currentPage}
            pages={pagination(activityInfo, 10, currentPage).pages}
            onPageChange={setCurrentPage}
          />
        )}
      </TableContainer>
    </ContainerPage>
  );
};
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { '@digitalmoney:token': token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/home',
        permanent: false
      },
      props: {}
    };
  }

  return {
    props: {}
  };
}
export default FullActivity;
