        const publish_post = document.getElementById('publish_post');
        publish_post.addEventListener('submit', (e) =>{
        e.preventDefault();

        const title = publish_post.title.value;
        const sickness = publish_post.sickness.value;
        const hospitalName = publish_post.hospitalName.value;
        const hospitalAddress = publish_post.hospitalAddress.value;
        const hospitalEmail = publish_post.email.value;
        const hospitalPhone = publish_post.hospitalPhone.value;
        const description = publish_post.description.value;
        const treatmentDate = publish_post.treatmentDate.value;
        const posted_on = publish_post.posted_on.value;
        const amount = publish_post.amount.value;
        const isHidden = publish_post.isHidden.value;
        const image = publish_post.image.image;


        const namePattern = /^[a-zA-Z\s]+$/;
        const addressPattern = /^[a-zA-Z0-9\s\S]+$/;
        const emailPattern = /^[a-z0-9]([a-z0-9_\.\-])*\@(([a-z0-9])+(\-[a-z0-9]+)*\.)+([a-z0-9]{2,4})/;
        const phonePattern = /^[0-9]+$/;
        const datePattern = /^[a-zA-z\s\S]+$/;
        const amountPattern = /^[0-9\s\S]/;

        if (!namePattern.test(title)) {
            throw Error('Invalid title')
        }
        if (!namePattern.test(sickness)) {
            throw Error('Invalid Sickeness name entered')
        }
        if (!namePattern.test(hospitalName)) {
            throw Error('Invalid Hospital Name')
        }
        if (!addressPattern.test(hospitalAddress)) {
            throw Error('Invalid Hospital Address')
        }
        if (!emailPattern.test(hospitalEmail)) {
            throw Error('Invalid Hospital Email')
        }
        if (!phonePattern.test(hospitalPhone)) {
            throw Error('Invalid Phone')
        }

        if (!namePattern.test(description)) {
            throw Error('Invalid Description')
        }
        if (!datePattern.test(treatmentDate)) {
            throw Error('Invalid date')
        }
        if (!datePattern.test(posted_on)) {
            throw Error('Invalid Description')
        }
        if (!amountPattern.test(amount)) {
            throw Error('Invalid Amount')
        }
        if (isHidden === '') {
            throw Error('Is hidden should not be empty')
        }
        if (image === '') {
            throw Error('select files should not be empty')
        }

        const formData = new FormData();

        formData.append('title', title);
        formData.append('sickness', sickness);
        formData.append('hospitalName', hospitalName);
        formData.append('hospitalAddress', hospitalAddress);
        formData.append('hospitalEmail', hospitalEmail);
        formData.append('hospitalPhone', hospitalPhone);
        formData.append('description', description);
        formData.append('treatmentDate', treatmentDate);
        formData.append('posted_on', posted_on);
        formData.append('amount', amount);
        formData.append('isHidden', isHidden);
        formData.append('image', image.files[0]);

        fetch('', {
            method: 'Post',
            headers: {
                // 'Content-Type': 'application/json'
            },
            body: formData,
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            if (data.success) {
                response.innerHTML = data.success;
                response.style.backgroundColor = '#d1e7dd';
                response.style.padding = '10px'
                response.style.marginBottom = '4px';
                response.style.textAlign = 'center'
            }
        })
        .catch((e) => {
            console.log(e);
        })
    









})