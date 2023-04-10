import * as s from './fullactivity.styles';
import {
  ContainerPage,
  PageTitle,
  TableContainer,
  Pagination,
  Filter
} from 'components';
import { InputText } from 'components/input/input-text/InputText';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../login/schemas';
import { FiFilter } from 'react-icons/fi';
import { BsCircleFill } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import { useGetAcctActivity } from 'hooks/useAccount/useGetAcctActivity';
import { AcctActivity } from 'hooks/useAccount/useGetAcctActivity/types';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import nookies from 'nookies';
import { useUserStore } from 'store/user';
import { useEffect, useState } from 'react';
import { pagination } from 'utils/tests/filters/filter';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import ActivityDetail from 'layouts/FullActivity/ActivityDetail';
import { priceFormatter } from 'utils/formatters/priceFormatter';

const FullActivity = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('tipo');
  const [selectedFilter, setSelectedFilter] = useState('');
  const router = useRouter();
  const user = useUserStore(state => state.user);
  const { data: activityInfo } = useGetAcctActivity(user.id);
  const [detailActivity, setDetailActivity] = useState(false);
  const [activityId, setActivityId] = useState(0);

  const handleClickDetail = (activityIdNumber: number) => {
    setActivityId(activityIdNumber);
    setDetailActivity(true);
  };

  const { control, watch } = useForm({
    defaultValues: {
      search: ''
    },
    resolver: yupResolver(schemaLogin),
    mode: 'all'
  });

  const {
    colors: { primary, secondaryBlack }
  } = useTheme();

  const handleApplyClick = (selectedFilter: string, selectedOption: string) => {
    setSelectedFilter(selectedFilter);
    setSelectedOption(selectedOption);
  };

  const showFilters = (e: any) => {
    e.preventDefault();
    setOpenFilter(!openFilter);
  };

  const activityInfoPagination =
    activityInfo &&
    pagination(activityInfo, 10, currentPage, {
      title: watch('search'),
      date: selectedOption === 'periodo' ? selectedFilter : undefined,
      type: selectedOption === 'tipo' ? selectedFilter : undefined
    });

  useEffect(() => {
    const token = nookies.get(null, { path: '/' })['@digitalmoney:token'];
    if (!token) {
      router.push('/home');
    }
  }, []);

  return (
    <>
      {detailActivity ? (
        <ActivityDetail transactionId={activityId} />
      ) : (
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
            {openFilter && <Filter handleApplyClick={handleApplyClick} />}
            {activityInfoPagination &&
              activityInfoPagination.data.map((activity: AcctActivity) => (
                <s.ActivityContainer
                  key={activity.id}
                  onClick={() => handleClickDetail(activity.id)}
                >
                  <s.ActivityDescription>
                    <BsCircleFill color={primary} size="20" />
                    <s.ActivityDescriptionText>
                      {activity?.description}
                    </s.ActivityDescriptionText>
                  </s.ActivityDescription>
                  <s.ActivityValue>
                    <s.ActivityDescriptionText>
                      {priceFormatter(activity?.amount)}
                    </s.ActivityDescriptionText>
                    <span>
                      {format(new Date(activity?.dated), 'EEEE', {
                        locale: pt
                      })}
                    </span>
                  </s.ActivityValue>
                </s.ActivityContainer>
              ))}
            {activityInfoPagination && (
              <Pagination
                currentPage={currentPage}
                pages={activityInfoPagination.pages}
                onPageChange={setCurrentPage}
              />
            )}
          </TableContainer>
        </ContainerPage>
      )}
    </>
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
