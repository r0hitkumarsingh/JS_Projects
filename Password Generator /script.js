$(document).ready(function () { 
	let password = ''; 

	function generatePassword() { 
		const passwordLength = 
			parseInt($('#passwordLength').val()); 
		const useSymbols = 
			$('#useSymbols').is(':checked'); 
		const useNumbers = 
			$('#useNumbers').is(':checked'); 
		const useLowerCase = 
			$('#useLowerCase').is(':checked'); 
		const useUpperCase = 
			$('#useUpperCase').is(':checked'); 

		let charset = ''; 
		let newPassword = ''; 

		if (useSymbols) charset += "!@#$%^&*()"; 
		if (useNumbers) charset += "0123456789"; 
		if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz"; 
		if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

		for (let i = 0; i < passwordLength; i++) { 
			newPassword += charset.charAt( 
				Math.floor(Math.random() * charset.length)); 
		} 

		password = newPassword; 
	} 

	function copyToClipboard() { 
		const el = document.createElement('textarea'); 
		el.value = password; 
		document.body.appendChild(el); 
		el.select(); 
		document.execCommand('copy'); 
		document.body.removeChild(el); 
		$('#successMessage').text('Password copied to clipboard!'); 
		setTimeout(function () { 
			$('#successMessage').text(''); 
		}, 2000); 
	} 

	$('#generatePassword').click(function () { 
		generatePassword(); 
		$('#generatedPassword').val(password); 
		$('#generatedPasswordContainer').show(); 
	}); 

	$('#copyToClipboard').click(function () { 
		copyToClipboard(); 
	}); 
});
