function setError(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

function setSuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function isValidEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isValidDate(time) {
    const valid = (time.search(/^\d{2}.\d{2}$/) != -1) &&
        (time.substr(0, 2) >= 0 && time.substr(0, 2) <= 24) &&
        (time.substr(3, 2) >= 0 && time.substr(3, 2) <= 59) &&
        (time.substr(6, 2) >= 0 && time.substr(6, 2) <= 59);
    return valid
}

function validateForm() {
    const nama_pelanggan = document.getElementById('nama_pelanggan')
    const email = document.getElementById('email')
    const jam_keberangkatan = document.getElementById('jam_keberangkatan')
    const tujuan_keberangkatan = document.getElementById('tujuan_keberangkatan')
    const jumlah_tiket = document.getElementById('jumlah_tiket')
    const _nama_pelanggan = nama_pelanggan.value.trim();
    const _email = email.value.trim();
    const _jam_keberangkatan = jam_keberangkatan.value.trim();
    const _tujuan_keberangkatan = tujuan_keberangkatan.value.trim();
    const _jumlah_tiket = jumlah_tiket.value.trim();

    let isValid = false

    if (_nama_pelanggan === '') {
        isValid = false
        setError(nama_pelanggan, 'Nama pelanggan wajib diisi!');
    } else if (_nama_pelanggan.length > 30) {
        isValid = false
        setError(nama_pelanggan, 'Nama pelanggan tidak boleh lebih dari 30 karakter!');
    } else {
        isValid = true
        setSuccess(nama_pelanggan);
    }


    if (_email === '') {
        isValid = false
        setError(email, 'Email wajib diisi!');
    } else if (!isValidEmail(_email)) {
        isValid = false
        setError(email, 'Format email tidak sesuai!');
    } else {
        isValid = true
        setSuccess(email);
    }


    if (_jam_keberangkatan === '') {
        isValid = false
        setError(jam_keberangkatan, 'Jam Keberangkatan lengkap wajib diisi!');
    } else if (!isValidDate(_jam_keberangkatan)) {
        isValid = false
        setError(jam_keberangkatan, 'Jam Keberangkatan salah format!');
    } else {
        isValid = true
        setSuccess(jam_keberangkatan);
    }

    if (_tujuan_keberangkatan === '') {
        isValid = false
        setError(tujuan_keberangkatan, 'Tujuan Keberangkatan lengkap wajib diisi!');
    } else {
        isValid = true
        setSuccess(tujuan_keberangkatan);
    }

    if (_jumlah_tiket === '') {
        isValid = false
        setError(jumlah_tiket, 'Jumlah Tiket lengkap wajib diisi!');
    } else if (parseInt(_jumlah_tiket, 10) === 0 || parseInt(_jumlah_tiket, 10) > 10) {
        isValid = false
        setError(jumlah_tiket, 'Jumlah Tiket hanya boleh diisi dari 1-10!');
    } else {
        isValid = true
        setSuccess(jumlah_tiket);
    }

    return isValid
}

function showPreview() {
    const nama_pelanggan = document.getElementById('nama_pelanggan')
    const email = document.getElementById('email')
    const jam_keberangkatan = document.getElementById('jam_keberangkatan')
    const tujuan_keberangkatan = document.getElementById('tujuan_keberangkatan')
    const jumlah_tiket = document.getElementById('jumlah_tiket')
    const _nama_pelanggan = nama_pelanggan.value.trim();
    const _email = email.value.trim();
    const _jam_keberangkatan = jam_keberangkatan.value.trim();
    const _tujuan_keberangkatan = tujuan_keberangkatan.value.trim();
    const _jumlah_tiket = jumlah_tiket.value.trim();

    const items = []
    items.push({
        label: 'Nama Pelanggan',
        value: _nama_pelanggan
    }, {
        label: 'Email',
        value: _email
    }, {
        label: 'Jam Keberangkatan',
        value: _jam_keberangkatan
    }, {
        label: 'Tujuan Keberangkatan',
        value: _tujuan_keberangkatan
    }, {
        label: 'Jumlah Tiket',
        value: _jumlah_tiket
    })
    ul = document.createElement('ul');

    document.getElementById('preview').appendChild(ul);

    items.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += `${item.label} : ${item.value}`;
    });
}

const register = async (event) => {
    event.preventDefault()

    const isValid = await validateForm()
    if (isValid) {
        showPreview()
    }
    return
}