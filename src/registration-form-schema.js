import * as yup from 'yup';

export const registrationFormSchema = yup.object().shape({
	email: yup.string().required('Заполните почту').email('Почта введена неверно'),
	password: yup
		.string()
		.required('Заполните пароль')
		.min(8, 'Пароль должен быть не менее 8 символов')
		.matches(/^\S+$/, 'Пароль должен сосстоять из букв, цифр и символов')
		.matches(/[a-zA-Z]+/, 'Пароль должен сосстоять из букв, цифр и символов')
		.matches(/[0-9]+/, 'Пароль должен сосстоять из букв, цифр и символов')
		.matches(/[\W+]+/, 'Пароль должен сосстоять из букв, цифр и символов'),
	passwordcheck: yup
		.string()
		.required('Заполните повтор пароля')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});
