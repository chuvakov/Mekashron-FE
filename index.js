import AuthorizationService from './api/authorizationService.js';

$('#BtnAuth').click(async function (e) {
	e.preventDefault();
	try {
		let username = $('#Username').val();
		let password = $('#Password').val();

		if (username == '') {
			toastr.warning('Введите логин!');
			return;
		} else if (password == '') {
			toastr.warning('Введите пароль!');
			return;
		}

		let result = await AuthorizationService.login(username, password);

		if (result.resultCode == 0) {
			$('#ValEntityId').text(result.entityId);
			$('#ValFirstName').text(result.firstName);
			$('#ValLastName').text(result.lastName);
			$('#ValCompany').text(result.company);
			$('#ValAddress').text(result.address);
			$('#ValCity').text(result.city);
			$('#ValCountry').text(result.country);
			$('#ValZip').text(result.zip);
			$('#ValPhone').text(result.phone);
			$('#ValMobile').text(result.mobile);
			$('#ValEmail').text(result.email);
			$('#ValEmailConfirm').text(result.emailConfirm);
			$('#ValMobileConfirm').text(result.mobileConfirm);
			$('#ValCountryID').text(result.countryID);
			$('#ValStatus').text(result.status);
			$('#ValLid').text(result.lid);
			$('#ValFtpHost').text(result.ftpHost);
			$('#ValFtpPort').text(result.ftpPort);
			$('#ValResultCode').text(result.resultCode);
			$('#ValResultMessage').text(result.resultMessage);

			$('#ContainerLogin').addClass('d-none');
			$('#ContainerLoginInfo').removeClass('d-none');
		}
	} catch {}
});

$('#BtnBackToAuth').click(function () {
	$('#ContainerLogin').removeClass('d-none');
	$('#ContainerLoginInfo').addClass('d-none');
});

$('#RegisterForm').click(function () {
	$('#ContainerLogin').addClass('d-none');
	$('#ContainerRegister').removeClass('d-none');
});

$('#LoginForm').click(function () {
	$('#ContainerLogin').removeClass('d-none');
	$('#ContainerRegister').addClass('d-none');
});

$('#BtnRegister').click(async function (e) {
	e.preventDefault();
	try {
		let email = $('#Email').val();
		let password = $('#PasswordRegister').val();
		let firstname = $('#Firstname').val();
		let lastname = $('#Lastname').val();
		let phone = $('#Phone').val();
		let countryId = $('#CountryId').val();
		let aId = $('#AId').val();
		let singupIp = $('#SingupIp').val();

		if (email == '') {
			toastr.warning('Поле email является обязательным!');
			return;
		} else if (password == '') {
			toastr.warning('Поле password является обязательным!');
			return;
		} else if (firstname == '') {
			toastr.warning('Поле firstname является обязательным!');
			return;
		} else if (lastname == '') {
			toastr.warning('Поле lastname является обязательным!');
			return;
		} else if (phone == '') {
			toastr.warning('Поле phone является обязательным!');
			return;
		} else if (countryId == '') {
			toastr.warning('Поле countryId является обязательным!');
			return;
		} else if (aId == '') {
			toastr.warning('Поле aId является обязательным!');
			return;
		} else if (singupIp == '') {
			toastr.warning('Поле singupIp является обязательным!');
			return;
		}

		let result = await AuthorizationService.register(
			email,
			password,
			firstname,
			lastname,
			phone,
			countryId,
			aId,
			singupIp
		);

		if (result.resultCode == 1) {
			$('#ContainerRegister').addClass('d-none');
			$('#ContainerLogin').removeClass('d-none');
		}
	} catch {}
});
