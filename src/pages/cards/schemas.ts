import Yup from 'settings/yup';

export const schema = Yup.object().shape({
  cardNumber: Yup.number().required().max(16),
  cardName: Yup.string().required(),
  expirationDate: Yup.string().required().max(5),
  cardCvv: Yup.number().required().max(3)
});
