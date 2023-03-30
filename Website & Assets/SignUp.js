window.onload = () => {
        const SignUpButton = document.getElementById('SignUp')

        SignUpButton.onclick = () => {
            const form = document.forms['SignUpValidation'];
            const Name = form['Name'].value;
            const Email = form['Email'].value;
            const Phone = form['Phone'].value;
            const Address = form['Address'].value;
            const TNC = form['TNC'].checked;

            if(Name === '' ||Email === '' ||Phone === ''||Address === ''|| !TNC ){
                alert('Fill all the form!')
                return false;
            }
 
            if(Name.length < 3){
                const NameError = document.getElementById('NameError');
                NameError.innerText = 'Name must be 3 or more than 3 letters!'
                return false;
            }

            if(!Email.includes('@gmail.com')){
                alert('Email must inlcludes @gmail.com')
                return false;
            }

            if(Phone.length < 10 || Phone.length > 13){
                alert('Phone number must be at least 10-13 digits!')
                return false;
            }

            if(Address.length < 10){
                const AddressError = document.getElementById('AddressError');
                AddressError.innerText = 'Address must be more than 10 letters!'
                return false;
            }

        form.submit();

        }
}