const dataMahasiswa = [
    {
        id: 1,
        nama: "Alice",
        usia: 20,
        jurusan: "Informatika"
    },
    {
        id: 2,
        nama: "Bob",
        usia: 22,
        jurusan: "Teknik Elektro"
    },
    {
        id: 3,
        nama: "Carol",
        usia: 21,
        jurusan: "Desain Grafis"
    },
    {
        id: 4,
        nama: "Balmon",
        usia: 21,
        jurusan: "Informatika"
    }
]

//1. Buatkan data diatas menjadi seperti ini ["Alice","Bob","Carol"]
//2. Buatkan array object yang hanya menampilkan nama dan usia saja
//3. Tampilkan pada html dengan tampilan seperti ini
// 1. nama: Alice - 20
// 2. nama: Alice - 20

const dataMahasiswaBaru = [
    {
        id: 1,
        nama: "Alice",
        usia: 20,
        jurusan: "Informatika",
        alamat: {
            kota: "Jakarta",
            provinsi: "DKI Jakrta"
        },
        nilaiAkhir: 85,
    },
    {
        id: 2,
        nama: "Bob",
        usia: 22,
        jurusan: "Teknik Elektro",
        alamat: {
            kota: "Jogja",
            provinsi: "DI Yogyakarta"
        },
        nilaiAkhir: 90,

    },
    {
        id: 3,
        nama: "Carol",
        usia: 21,
        jurusan: "Desain Grafis",
        alamat: {
            kota: "Semarang",
            provinsi: "Jawa Tengah"
        },
        nilaiAkhir: 70,

    },
    {
        id: 4,
        nama: "Balmon",
        usia: 21,
        jurusan: "Informatika",
        alamat: {
            kota: "Malang",
            provinsi: "Jawa Timur"
        },
        nilaiAkhir: 60,

    }
]

//1. Buatkan data datas menjadi seperti ini [{nama:"Bob",kotaAsal:"Jogja","Kalimat":"Saya berasal dari malang"}]
//2. Tampilkan pada html mahasiswa yang jurusan informatika, dan munculkan nama dan provinsi

//1. balmon - jawa timur

//pertanyaan bonus
//3. Munculkan pada alert berapa rata rata nilaiAkhir dari data mahasiswa diatas
