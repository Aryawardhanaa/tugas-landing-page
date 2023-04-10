// Fungsi untuk mengambil nilai dari setiap input pada form
function handleGetFormData() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const cityInput = document.getElementById("city").value;
    const emailInput = document.getElementById("email").value;
    const zipCode = document.getElementById("zipcode").value;
    const noHp = document.getElementById("nohp").value;
    const pesanInput = document.getElementById("pesan").value;
    const statusInput = document.getElementById("status").checked;

    // Mengembalikan sebuah objek dengan properti yang telah disebutkan
    return {
        firstName,
        lastName,
        emailInput,
        cityInput,
        zipCode,
        noHp,
        pesanInput,
        statusInput
    };
}

// Fungsi untuk memeriksa apakah suatu string hanya terdiri dari angka
function isNumber(str) {
    // Loop melalui setiap karakter dalam string
    for (let i = 0; i < str.length; i++) {
        // Gunakan isNaN() untuk mengecek apakah karakter bukan angka
        if (isNaN(str.charAt(i))) {
            return false; // Jika karakter bukan angka, kembalikan false
        }
    }
    return true; // Jika semua karakter adalah angka, kembalikan true
}

// Fungsi untuk memeriksa apakah checkbox telah dicentang
function checkboxIsChecked() {
    const checkbox = document.getElementById("status");
    return checkbox.checked;
}

// Fungsi untuk memeriksa apakah semua inputan pada form telah diisi dengan benar
function validateFormData(formData) {
    if (
        formData &&
        !isNaN(formData.zipCode) &&
        formData.status === true
    ) {
        return true;
    } else {
        return false;
    }
}

// Fungsi untuk menangani submit form
function submit(e) {
    e.preventDefault(); // Mencegah form untuk melakukan refresh halaman
    const formData = handleGetFormData();
    if (validateFormData(formData)) {
        document.getElementById('warning').innerHTML = '';
        console.log('Data berhasil ditambah');
        // Mengosongkan kembali nilai dari setiap input pada form
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("city").value = "";
        document.getElementById("email").value = "";
        document.getElementById("zipcode").value = "";
        document.getElementById("nohp").value = "";
        document.getElementById("pesan").value = "";
        document.getElementById("status").checked = false;
    } else {
        document.getElementById('warning').innerHTML = 'Periksa form anda sekali lagi';
    }
}

// Mendapatkan elemen form dan menambahkan event listener pada saat form disubmit
const form = document.getElementById('form-cont');
form.addEventListener('submit', submit);