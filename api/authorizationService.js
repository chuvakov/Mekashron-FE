class AccountService {
	async login(username, password) {
		let result = null;
		await axios
			.post('http://www.tz2.alex-chuvakov.ru/Authorization/Login', {
				username: username,
				password: password,
			})
			.then(function (response) {
				if (response.data.resultCode == 0) {
					toastr.success('Авторизация прошла успешно!');
				} else {
					toastr.error('Такой пользователь не зарегестрирован!');
				}
				result = response.data;
			})
			.catch(function (error) {
				toastr.error('Не удалось авторизоваться!');
				throw new Error();
			});
		return result;
	}

	async register(email, password, firstname, lastname, phone, countryId, aId, singupIp) {
		let result = null;
		await axios
			.post('http://www.tz2.alex-chuvakov.ru/Authorization/Register', {
				email: email,
				password: password,
				firstname: firstname,
				lastname: lastname,
				mobile: phone,
				countryId: countryId,
				aId: aId,
				singupIP: singupIp,
			})
			.then(function (response) {
				if (response.data.resultCode == 1) {
					toastr.success('Регистрация прошла успешно!');
				} else {
					toastr.error('Такой пользователь уже зарегестрирован!');
				}
				result = response.data;
			})
			.catch(function (error) {
				toastr.error('Не удалось зарегестрироваться!');
				throw new Error();
			});
		return result;
	}
}

export default new AccountService();
