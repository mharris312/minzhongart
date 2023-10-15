var p = [
  { y: 2023, t: 'Lake McDonald at Dusk', h: 12, w: 16, m: 'Oil on canvas', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbShcpVzvLy6nBlIvaRFKyPEmvggj7ggoLXTGCx918TF4pwvD1H5mD3U3OcKUdBeQY3nfhQuCMjWZ8jt1AYcuRBN_AqOK8ILOifYv91gIfoUF5-P5y7rL9GO84HXUOz5rw2D_hwUjvtHJGUKf9d24KWknLy04JELn92VDfRlxQ6czk2q6zzUE_kMmnuqtn/s1732/PXL_20230901_141711760~2.jpg', g: ['landscape'], p: 'sold'},
  { y: 2023, t: 'Little Chief at Dusk', h: 9, w: 12, m: 'Oil on linen panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgP74xn92XhpJSPXcvID-OWSE67ygD-9m891SV5JC0U56q5HBWHdxN6_efBykbvQuFA1dlyPdXR84EfXUYOVdpqj6i7gnDAD2JFzEooswi1gNP0EE7-L-yzSRwDhVG6Hhk8uGbQQDxDaJ5KYF_veAjS6WRDsgGYDRigeSV74LfxgdPJJB5WCJTSbicDyZd0/s1414/original_255386dc-5a7c-4b82-88be-199ce00bbcdd_PXL_20230901_141711760~3.jpg', g: ['landscape'], p: 'sold' },
  { y: 2023, t: 'Sunrise by St. Mary\'s', h: 8, w: 10, m: 'Oil on canvas panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgImd9IOxPNt-wy1G9n0_UpEgN986vgpr9hf_HPcP73h3JEpCHrwa3nDWY6bPQBWL84SXeUnJVowR87cjqVSR7QZTCys8HP50OXYtp-tG8amqnfCB4W6aZOfj-uV5uoVp-6cgzJPYLSSdjoof4_dlbBVOvdgylef5g1QDw20NwFA00UW6toI1ldaY6BY0z1/s3024/PXL_20230831_181120481~2.jpg', g: ['landscape'], p: '$500' },
  { y: 2023, t: 'Boats at Dusk', h: 8, w: 10, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYogsVG_TQEB5ZosWu28dVghMrinX6gOo4yOmp7RIOuSwwmj065D3izdKejqFdTpWwf_nBKJkMBn0brzu_WwCyTen5yQ8d66JWQKFlENr7H2-cMYOzAGeI123Mzi3tDpQXph_Vgjes0gBHaGBcbDwt1e8pQOWqpHp45Pt80J1WGgTO_uBVYhA1fijsxDJF/s3554/PXL_20230823_054705373.jpg', g: ['marinescape'], p: 'sold' },
  { y: 2023, t: 'Edmonds Marsh', h: 12, w: 16, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8S-A0v0Pnk_hhk-QLYoPrF9vH_mZS6tneUZAQCqazDcqh4McC51iJsaAUGTBcTLe9vFgdM9xs6ojIPjA5lURgCXWut3e8C9wczoBy9ZxP7SCYPCVTd9QdQbax30ac4Uu79MrPage_YHzt-l2CGQc5b1fyYTtsL8HQRkH0ZbTVeEODl_Zgthx0KkPosVmU/s3788/Min%20Zhong_Edmonds%20Marsh_12x16%20_fr19x23_oil_750.jpg', g: ['landscape'], p: '$750' },
  { y: 2023, t: 'Afternoon at Sunrise Point', h: 9, w: 12, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2qfLMpcdQfGu0pj8VzE-HbFVSvwb7uOpF3kxAsrieAg7Crjtv4i_E9_vBLsOSJZdCS6EENn0JZqfOmo0J1bZHaDadqOnX7IejF5QVnlugp7CYe7oZwivNg6BPw-6wosdm5hFP1C_0ruam0FMH0L8u5ZA32eg2_PxcUgbMxNEFwAmBNCGsX2kOmXmks_Tb/s3269/PXL_20230831_180505823.jpg', g: ['landscape'], p: '$600' },
  { y: 2023, t: 'On Piegan Pass', h: 9, w: 12, m: 'Oil on linen panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKezdUYhPso602RB9VJC5xR1lkyAcawEJ3k-NmUjSQpX_HFfl7G7-jCP6Zn63Q9TLgjULnby-Rda-sn09Ll2c9K3vWXNIGTEyd7c7XgteEoWN1l_6i_f5njVjlBcUJ4CRG-hN3ulj6zi36IEXpn5mmJpPTxHhLLgrGP0DoOlCDX1ktPv2AnENpOyonQiGH/s3670/PXL_20231003_060128758.jpg', g: ['landscape'], p: '$600' },
  { y: 2023, t: 'Farm in Morning Light', h: 8, w: 10, m: 'Oil on canvas', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9WqCvGUeC30VihIZpPeIaExWl92x37uIJNpB0f8w7nvFyKZY_R9mhfA6wr0CXnF1RX4TI9yqRSwm0pRgM8V_4R1wyUtHoWAOHdA-xy5Wv6XEirz3WGzbBNcHgW9syf6UTV-k3KMpBgTbgSt7CceCInfN1bW-bbGzAE_bVr6pCatkt_6sFRrs5yEubgaFw/s3535/original_4276cbb5-b1ce-4e77-991c-857d5fe31ba1_PXL_20230831_234742893.jpg', g: ['landscape'], p: '$500' },
  { y: 2023, t: 'Barn at Whidbey Fairground', h: 9, w: 12, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrZBjombOcgKUSeJEciKCBu4jaUZRSUun-jJFwcq28ilX4YFyvYhpQOUJ7nqI4emTOcPwUk-rSqfTTPj-xuMXmVI8jce2wBDMR3rJ2XZA45gxPJjFmviDvRBQg2D_jatAoJKiato1V5gpU_M57YOGjna4kV49m6Bg2wygErwXkqpHEfq0iudo3MK5cxwrp/s3635/original_6906c188-cd5a-448a-85d7-56fbe1ed93ef_PXL_20230715_053127454.jpg', g: ['landscape'], p: '$650' },
  { y: 2023, t: 'View of Mt. Rainier from Magnuson Park', h: 11, w: 14, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrt4ViXIigUF4XGQXNLpKTSyqza2_uHrx09Gyj5TcT7SloP0GoyZBaVJIfn4uM8P310C4skxnn7aZEvPB4Y8YAs0VEtOkY6hHItzWdc_LkKm2jmELOv5J6rZrmrjkoizMCMqlVJg4ecLwvOMSWM0xM_oaEI_fexxoeL_r85q_-VWgZQw0lbUXHH7V-Iez8/s2992/PXL_20230426_144443857.jpg', g: ['landscape'], p: '$500' },
  { y: 2023, t: 'Dream Lake', h: 11, w: 14, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0LbjhjWcPh8lGMhN5ANdLbqZU22R0F-0EsFJhwdhDKUrZDUEmvfsma1Thfp88m6VXFJprM_7k3mf9YiUaytor2kfLi7yaTCQa-tv0QpI5v_jWh6JBvoX1RaF4DUUHKzPIqschJoyoCr_F-6pWE3Mp1Y7rpgCcdV_-qX4QqGD-wDhTgE9yGWAP6sQpK6KF/s3577/PXL_20230604_195148932.jpg', g: ['landscape'], p: '$700' },
  { y: 2023, t: 'Before Sunrise', h: 8, w: 10, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaFe5kBSFwOpteadKZhmAqp7f4DvmVi33CZNlEGlCUUgbk1-MgX1JqurSKK9WAFn-rOkBqUvZz1HQc_3yOJkkDziRqeNQLYP6PDowxRwj6W64CWXl58hiX4NOhzKOejR5XzdwG6X9iYRr7Pt-sARiW_pI-7hJDvBstM9-64TnHzrfYkG2zP0F2XC0nYMG1/s3660/PXL_20230604_053343788.jpg', g: ['landscape'], p: '$700' },
  { y: 2023, t: 'Sunset', h: 8, w: 10, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8OUWsTy4ICKb-fAqE0_aStvUDax72BfzAkkcmKApkgtBLBoHhMS7e-daG4_hgCITL5YvJYnxtA_ZYakwyd3HJiIuMejy6vqu9J5CpOoWJVSvYjl29I01UBY8-8CFxZK8b9H6yPb76LFweSFIumcNfbqMv9dPHsubN8y3iYUmafqgebFllxOiMPCXNczPB/s3500/PXL_20230427_230300553.jpg', g: ['landscape'], p: 'sold' },
  { y: 2023, t: 'After Sunset', h: 8, w: 10, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpZWKxqag2763rYvFQeRuzlxeHAZuWfzbqaiFyBviaRAgdpZujQEFei7RnL6tBIWhzj0tVZCIeQqz-Kln1PsihAdun1vLMp1-_4BgL0xDzd8xev88uYv_hpvBt3U-Ph_ZT3mhOa2pljavMoJCgJ2Oilk6_BMHK0riIOM9j071fReC1ER4mOBhhH7xOqc_C/s3429/PXL_20230510_063731285.jpg', g: ['landscape'], p: '$500' },
  { y: 2023, t: 'Columbia River in Afternoon Light', h: 9, w: 12, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhLDLxKeNh7FFvP9T318gDbTOhGJ-jM_kIs9107Egbiy_c7Xu44xFjzNJSlN73gERqqWcxsEI1D3kVVESCquE9H44-QUSwovd7ZTS11QUBAZ6fBXmH4SU-o1Z3j8d61rvykNyqhfgF-GUdbbFCfJfQQE76LhndYxpa11YGSxKTP55_cFmpLsMLJq1fHg9Y/s3789/PXL_20230427_194132390.jpg', g: ['landscape'], p: '$650' },

  { y: 2022, t: 'Mt. Baker View from Artists Point', h: 12, w: 16, m: 'Oil on canvas', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBc2v74A-19IesoM7FGH9aHzgXIEevcFZWZPIaV-Aihr2BBSIn7Xy_7RqPKmkqmSqRekAvgZFAHRyRohi-my3JUSOOzvR65tFjNmgVu5OtJJw4UCkjzqyezVZ-TycfniKvjx5SKXGB6SsFrBTBG2IFRiPO9plLvwYZBRFNDvFvAFBNre7KfkVLbkDrUw/s3884/PXL_20230101_223320340.jpg', g: ['landscape'], p: 'sold' },
  { y: 2022, t: 'View of Cushman Crest from Nisqually River', h: 22, w: 28, m: 'Oil on canvas', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvH9ezd6KA4BubiZIEAPu-5P11Viiq8zA6GjgyN7mM7DVUPjmYde5HgNHTwglYcFxlYqWne7BIBqPTf4nsGjqzpv4UamHP-Mt7eabw6ABh2VTPqsW306NgaOIWJIzEFAaVShcP5j4AmDJ_qotngr0LigZookQjxroDdFbbwRdlrwJZEkcvQxL75a580g/s3552/PXL_20220814_195910983.jpg', g: ['landscape'], p: '$1900' },
  { y: 2022, t: 'Dusk in the Neighborhood', h: 12, w: 9, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYrPem_2rrEHoOihpYosomNvHEZexU6dd0csl9AhrxDeqvQM6x5sAcNzc6OcLIsX3ZFsthZQ-VMZfy3V4OFe5FCh4UkwIFJe3iUyVcQUKxChnxR27Z4VG9gUH5rTyOBPJjI2k-tLri6YkD25khWZOAqftEmocD2GwtGxAmiZQz7OOjKsh7FcH1ccTOcQ/s3851/PXL_20220929_081537227.jpg', g: ['landscape'], p: '$600' },
  { y: 2022, t: 'Dusk from Mossier Twin Tunnels', h: 8, w: 10, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5Ma5rORvlYJ7RhvMhQLVchoaW3jNJWrFBYgYpl0gc0UHoYpNF-PpN3Znv0cOiTOBdz5YSv1BQyw-K8O2WjUAdmo1NxzI22LF2TVDNcNRTgkqDwFJHfXz5LppbB7dkqPgK6qwdXxQmzr3hL0PgIx_fTQxknemYqyncfj8OqpXq5KVQ_Q-DkdShE5wkxA/s3524/PXL_20220728_020351918.jpg', g: ['landscape'], p: 'sold' },
  { y: 2022, t: 'Quandary at Fishermen\'s Terminal', w: 9, h: 12, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUER_8q3g36kcjytWfSF5uy4_CmFLCq0LwjNrRe09zMDxjdH3fUYtnTCpBjMf8Ev5CktTX4oFaaepyfesaBmrgczXBdfLvHIXg7k1N3RG-pMW5Btt_U3H2iYNDmdDgfxZwKl9xlEHhNEGl-rxFl6gaPNMjxgM1KLVTO5NTiD3baljqN7Vr6UdQXrFUug/s3622/PXL_20220913_012658972.jpg', g: ['marinescape'], p: '$600' },
  { y: 2022, t: 'Mount Si', h: 11, w: 14, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8lCtAqqamAl_NIjoX3CpqOPiSb8LimZMhXIm4wmE7XIjL-9KVAAe4VddS5jhcwWgNzn95TOwYCYN0Mr-iGGOK8cFkCPhz9LLC54ZfDuT6k_yCiNMpR8ZnisDbmf4uWXa008s4E9-j4rcb3FzJcQJMU8Bo9n58RwHqNdFgLiien3aNxoHrdbAm15T0SQ/s3734/PXL_20220326_004823217.jpg', g: ['landscape'], p: '$700' },
  { y: 2022, t: 'Winter Sunset', h: 18, w: 24, m: 'Oil on canvas', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsTRMYwt2MYNvrxHhHOX2ntoPxg39CzMXh54_edbt78fAyLI5_e9dwsRz5QU0wZKchi7wsVEIwFXKPK-tvXIlc2SADk0nfHFM1pCxTWyxinI7F7U5Dbx7ssx2ZXSZWIwi-3WTSc9TC0mMCFFUlbmqGJr1Z5LpNX5AwRpfERM8fBzCJffjTyEcBq5iMvA/s3800/PXL_20221224_173618628.jpg', g: ['landscape'], p: 'sold' },

  { y: 2021, t: 'Fall Colors By the Ball Park', h: 16, w: 20, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-N-XGT6VaV-I/YaXKnBLMaHI/AAAAAAADFgE/j5AAhwvvyYc0gttwPuCif_sA0TlixeTbwCPcBGAsYHg/s3518/PXL_20211108_064222955.jpg', g: ['landscape'], p: 'sold' },
  { y: 2021, t: 'Morning River Rocks', h: 11, w: 14, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-FSHFrl9HVHg/YaXJ2fEh4oI/AAAAAAADFf8/u1wChXLkAZUgEaIaJbHUj6HQCF-i_0MJwCPcBGAsYHg/s3278/PXL_20211126_234108854.jpg', g: ['landscape'], p: 'sold' },
  { y: 2021, t: 'Cady Park Bridge', h: 16, w: 20, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-J8sVz80HuyA/YaMcrKhtZeI/AAAAAAADFZQ/JJImO5uMnIoXNbxSz11lf7EWAr4YIHd4wCPcBGAsYHg/s3584/PXL_20211011_163931931.jpg', g: ['landscape'], p: 'sold' },
  { y: 2021, t: 'School at Nocturn', h: 8, w: 10, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-8jL-vvxOhes/YaWCthCugfI/AAAAAAADFe0/FjNczHwekE4xpsj2DBqYBnq6hiHLzu_3gCPcBGAsYHg/s3043/PXL_20211119_213349996.jpg', g: ['landscape'], p: '$500' },
  { y: 2021, t: 'View of Lake Sammamish From a Hill Top', h: 9, w: 12, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-aGE2j0y7u44/YTXL1OfqT8I/AAAAAAADAns/4CZdyBQnOPIaZpMdv2rZr5de5HqIREVAwCPcBGAsYHg/s3386/original_c2a05073-f7b2-42d1-a51a-018a123ac574_PXL_20210902_201551146.jpg', g: ['landscape'], p: '$600' },
  { y: 2021, t: 'Pink Blossoms in the Neighborhood', h: 8, w: 10, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-7Pd5mFHUSes/YQibklscgpI/AAAAAAAC-vA/ywJas31k_z0q55uTdjs-0P1iXyGtnJPagCPcBGAsYHg/s3536/PXL_20210409_023350153.jpg', g: ['landscape'], p: '$500' },
  { y: 2021, t: 'Evening Meadow in Woodinville', h: 12, w: 16, m: 'Oil on canvas panel', u: 'https://1.bp.blogspot.com/-EntCxiaJptw/YCYo_i2iyfI/AAAAAAAC0Yw/zuKbQBosbqkAi9t2oATKk3o6F9f_qjfxgCPcBGAsYHg/s3861/PXL_20210102_055440051.jpg', g: ['landscape'], p: 'sold' },
  { y: 2021, t: 'Branches on Sammamish River Trail', h: 8, w: 10, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-armaHUj5lEk/YQuEnkmrmRI/AAAAAAAC-74/-aEblZD9xZktA-qshYYJtjgaTlIricsSACPcBGAsYHg/s3354/PXL_20210308_081310627.jpg', g: ['landscape'], p: '$500' },
  { y: 2021, t: 'Nostalgia', h: 14, w: 11, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-3JJTWHgWt4o/YaXMxU2vIuI/AAAAAAADFgQ/j0m6oFrlMLMH6Vob5otqa-OLHwRde7JXgCPcBGAsYHg/s3551/PXL_20211121_192745389.jpg', g: ['stilllife'], p: '$700' },
  { y: 2021, t: '1889 Tugboat Arthur Foss', h: 14, w: 11, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-c09s1zy7v94/YRTK-qBtmDI/AAAAAAAC_SA/yZFNGkt1XQg8USxzrkHPRqD5vO1MEi4fQCPcBGAsYHg/s2848/PXL_20210812_065837220.jpg', g: ['marinescape'], p: '$700' },
  { y: 2021, t: 'Lightship No. 83', h: 14, w: 11, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-im9uTqcodLY/YQhpMTJInYI/AAAAAAAC-iY/MU9yA3O53QEHHmyRGFbTopt1qYDXZDj_gCPcBGAsYHg/s3306/PXL_20210802_063144791.jpg', g: ['marinescape'], p: '$700' },
  { y: 2021, t: 'Boats At Marina', h: 9, w: 12, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-dcJx5wB7_eI/YQhvVwbcffI/AAAAAAAC-jI/neMRGRw79ckBFLi60ur2q1XNxoQkOregQCPcBGAsYHg/s2931/PXL_20210701_072135743.jpg', g: ['marinescape'], p: '$650' },

  { y: 2019, t: 'Evening light through the branches', w: 9, h: 12, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-8CQNcMUto1w/XcpV8y9e-MI/AAAAAAACdKw/cbBNfyfZ2hAiTCQQxqK3JdI0PRX4XBLEQCKgBGAsYHg/s1600/IMG_20190906_233609.jpg', g: ['landscape'], p: '$600' },
  { y: 2019, t: 'Amneris', w: 12, h: 16, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-c5uIdYMGuvQ/XVeNSa8_Y8I/AAAAAAACYAg/QdXS_hNEZxIkx28p7ve7V76wo3U5dd6EQCKgBGAs/s1600/IMG_20190815_233354.jpg', g: ['marinescape'], p: 'sold' },

  { y: 2018, t: 'Snoqualmie River from Sandy Cove Park', w: 12, h: 9, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-l3Bh4ehZUu8/W46hAAFw9fI/AAAAAAACBnw/yQG3KuJNWsEBiRllmOvtQOhXmzFvcM07wCKgBGAs/s1600/IMG_20180904_080931019.jpg', g: ['landscape'], p: '$600' },
  { y: 2018, t: 'Mallet at Snoqualmie', w: 14, h: 11, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-Op9CPzKfEYY/W3kM2qZZ4RI/AAAAAAACAmk/X_YtVjEZMFMbZ8WU23qKCf0FgB52PTeTwCKgBGAs/s1600/IMG_20180818_134529396_HDR.jpg', g: ['stilllife'], p: 'sold' },

  { y: 2017, t: 'Dirigo in Sunset', w: 12, h: 16, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-mBJpkTxct24/WXl_4e0P2kI/AAAAAAABo5I/nVcz7J47HHIJ88MBUgKlqJd7ENYn8gMjgCKgBGAs/s1600/IMG_20170726_224839.jpg', g: ['marinescape'], p: 'sold' },
  { y: 2017, t: 'Venice in Morning Haze', w: 12, h: 16, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-SK49xP4AJtQ/Wg0wx95cfAI/AAAAAAABuEQ/P0oqYYqmpYwIatOIaqYG59u-iikqBwI3wCKgBGAs/s1600/IMG_20171115_222954.jpg', g: ['landscape'], p: '$750' },

  { y: 2015, t: 'Light Through the Woods', w: 28, h: 22, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-aLgf3VSfmV4/VdTjxm6w4oI/AAAAAAABQME/MzUG1jFpEgE/s1600/IMG_20150819_070310.jpg', g: ['landscape'], p: '$1900' },

  { y: 2023, t: 'Fire of Pink', h: 10, w: 8, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKU-2qOjg7okb4-OcHxduHWce5P0AuiZCudQs31wI_QknhTVRn4A2LKkxbBrlkzigqrfmbOa8HPm5ZsEGeKoVEsU5zuPDsMAkXgUvonJmDKNsHgA4I_qwqBAce0Bxnasit5h4zWWIHi2cL25s747Ke0A0Dg5XYRfv8nXRcRf1rtdkFoGAjp3mcYvDnF18L/s2902/PXL_20230910_173045518.jpg', g: ['stilllife'], p: '$500' },
  { y: 2023, t: 'Study of Yellow Dahlias', h: 14, w: 11, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBlmc5PliebePCmmROSsr9A6pdaax8RSRkhcv_2oZtE9roOFM3DcFuKojOmhoqg8FJMShh34vHSFX3og1b1Sh1Q8FhtTaevesTTiKvlPjOAsEZOkFMpndylac7LulIA2bfgqfIJriQWhWLw3_ppbM25uCmBhIca1K6KoXp10It6MH631qeA8K-dwkgPsi3/s2928/PXL_20230806_230947516-EDIT.jpg', g: ['stilllife'], p: '$700' },
  { y: 2023, t: 'Summer Symphony', h: 12, w: 12, m: 'Oil on canvas panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip_Q5wFBaVsLhHXQAv_JhSKJ2-Z7_cUH8aQ_WYZllZWPMmgTRpqsh6o_o-qaTCX7exnj0uTHb8q6YomujoF500NGfJj0QaWgz2VnBGXmAixc8V1ZDFCFfES3tPgSfA65_DeLUl4q0Xvbx0d65hWW-wwlOsTnLgEKw6yZipGtetAucDvRhMSYlSRn48S50H/s2315/PXL_20230920_061919556.jpg', g: ['stilllife'], p: '$700' },
  { y: 2023, t: 'Corals', h: 14, w: 11, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiREivHi2uvqZnxnooyNV36s_RRecReI6Uxf1vWqkzJeXfJ0ZWFQne9GIyE-up2yDbO6axlumhUgonR88txpJM4bsYNDlwcyG_GkxdXshvRcK1NjzpCzKPp-ztK-V6HVI3PqD4FVwgwsmkTe-9vhuphMeQYghaVVOfaX4lbCwSdO4W-ZBC181rKiUC-NRW4/s3449/PXL_20230704_131323049.jpg', g: ['stilllife'], p: '$700' },
  { y: 2023, t: 'Warm Glow', h: 8, w: 10, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5zkETqPar9hMcBtQlerCyusNYGDD4x4YulFcMHdbmPzLmWZPf7SnQeJj_07_eAea447rmO5-hFIddb1cxcw3hmWV4LQin1Lo6CzSjCpn0oNZw160_PBf7vxZuEd5lWoHHWiZ41_-EnPDH180Raq_FjgxrNjAVcRx3_a3NBwC6ESrssbvA3T5N4Um6HbO9/s3626/PXL_20230711_143326201.jpg', g: ['stilllife'], p: '$500' },
  { y: 2023, t: 'After the Rain', h: 14, w: 11, m: 'Oil on canvas', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDyVbkIumNImVdOby_szZhEzktMzGZoNq7hkRD3y5_wBO6ammZRuYU25C6c3aw1KThbtRKi-YO8GXahOmsu3UBYbDmX6Wx18fgtya9UILpNjwF4Gj4JtX5WzkH_fyYjo9FbV9PYplmpoBGUbsPsCY5Ko_-_2vA46k_PRvUK_TleKZW6DxgBe13CsONzmla/s3737/IMG_2023_07_02_163523.jpg', g: ['stilllife'], p: '$700' },
  { y: 2023, t: 'Yellow Roses at Dusk', h: 10, w: 8, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGrWPY6e58SLl-JaEJgoub53N4STAOQ7CjyeiiWglASo7g7IpPcvorBe7hQ0nioj9F3vKD3MIazzNt3W7FNkW3ZgvBFhUexTOFhkYrx_ehCINGcr8_1gGqTMefXGGl-J0lcFabS02AKlaRnUbvbks-8bP1kYPDhYcAFAJlXVUauK44ZeTK7iTlGvDo3FZb/s3131/PXL_20230626_034712685.jpg', g: ['stilllife'], p: '$500' },
  { y: 2023, t: 'Rose Arrangement', h: 10, w: 8, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirLLUueiKl4aWlBSh-Ajtww7tAx-SlJ1B0brNxoDnqIgpvhxKBQZ_gr-RMofJA5Hn0A0BuOjHR9RKJhXB-HEgvr_1YtqKu4r5TNUjQ4SsM6UXB4biyjCmt8oo4x2N44Npiu8OAYF4tjNHgTNaNW3WZdXyuomVA4IP6yvZ992Fa9Qpeh2lp6F_Crbi8Tliz/s3040/IMG_2023_07_24_225327.jpg', g: ['stilllife'], p: '$500' },
  { y: 2023, t: 'Rose Arrangement in Morning Light', h: 10, w: 8, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDeAmP4bNnjOY8uESExLrIQigLjjGdbnErXaO6JIdRxjCVwePVb-aoXYjofsuQom5rQuGAu21MssWjpqQS51tSPpUVkBWz40Oy79ypfIBxn8Or_Iv3kYX3qubhXaQ8brunkdz-xLQkPgXNue3qEchO5PIH5O0_Jo7cTum_JS0xbYGJf2ZI6XFyrgaR5_a7/s3596/PXL_20230616_160640287.jpg', g: ['stilllife'], p: '$500' },
  { y: 2023, t: 'Orange Glow', h: 4, w: 6, m: 'Oil on canvas panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirE6MPOsHkAhRfmabPHhOToyffsjFt6GSZSBMWoAl-6f7KcFFyWEwAwzymlpqh0nUPTk-Ywflzco6GRSvIOoISxnN_hM8u1_xNoZYKR633O7ZQmIW0od7zfgMt9i8bF-EJwIs90RzqMyiw6DRK7dJLO-9On17sAlGhNkfXuciqRyTSfx4tHcmLEg5u0w/s3361/PXL_20230112_070618802~2.jpg', g: ['stilllife'], p: '$120' },
  { y: 2023, t: 'Mandarins', h: 7, w: 5, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2jugiJISGqAQfGTHJ-cLWexkjPzH2s5WZmvWICB8V0J7EREXJ0bLDItVIYBb2-dfXd6dWJPczAfhXMdu5Eud0H0kPSkZw6um6XO1QCyPQx5GNuUkl_qogn2dyVWkOhl6ndk7KCF97L9W4O0SBpYvoR3SjTvw55zgWo6qkL8oo7hvtLoxcNq2Qt9BDjw/s3183/20230119_003551.jpg', g: ['stilllife'], p: '$170' },

  { y: 2022, t: 'Sunflower with Wine', h: 10, w: 8, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKDZoxF9X5SNDPkvo6osnJEGMNIutjG7oQ9UyOveMJ7aORFOJyogvDknPHtsz8FX-LUmRUghanBbicIpIMcYRfu1Z7AquDIpKQJSpNWP5IU7xiduX3W4m5G8lISTmSyo_gh0kIKtN6xbJhRahvr-TOhKpcT7Hu2J5i9Q2c9r7VjLf3sxAc4W-HRkGE1w/s2746/PXL_20221006_054911734.jpg', g: ['stilllife'], p: '$500' },
  { y: 2022, t: 'Sunflower', h: 10, w: 8, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsMaAHSo8voeLjd09_kwH2e-a7rCoHQgRPjMU4DHEBiv5OAhdFVwy8tPCUlmC-z3Q-oyYpbX7cqX2R1FSf-AJxNs3bhDJpxmdmZxo8rlf_WFGUOqHJJaRvzeWAvht5mOqXxBYSHPUbKbZzsPf4OmxM94jJHCUN3QnrbtOBFGRk5U-ai0Mh0zBWpsnB6Q/s2999/PXL_20221121_071657157.jpg', g: ['stilllife'], p: '$500' },
  { y: 2022, t: 'Pansies', h: 14, w: 11, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNfifTDIbIasQ4nRwBFXjvWVC2tqHVNStIUQTUjVcTZ9VmFih_qUWAukMPQHgFSO5TlTLeYJlLu0L8EsoaTW3kuMJKBN8YuxDnOzJ0Dpm9LDKVA3j7tlaHAQq8ATDkm6EIbLwm3BAU_C6GjF-pu4waZGfjbIbdf4fHd4EsbWoYHMGCVjMPeE7keLR2RQ/s3619/PXL_20220522_203726430.jpg', g: ['stilllife'], p: '$700' },
  { y: 2022, t: 'Tulips I', h: 10, w: 8, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjus3yhO1upXWpv4Rv_ibD_wdkERibR0At9YaVJkBY9giKoar1b-RqJ-HDYLdTosm_0VCSf5LqhT0QbhZ00R3Lnpy4Ly20QYeaim8C90uokJ9QcILWSjTvKVbJ30UfbHYfzJ9mlTZ4iai5xqdSQNBJQ9EtFI0qQzDLQnMvDOJN3yuB7wtK3Kb72m8Fjwg/s3236/PXL_20220406_023301952.jpg', g: ['stilllife'], p: '$500' },
  { y: 2022, t: 'Tulips II', h: 10, w: 8, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiH-AjZG0UoJ1FNT3xCsDY55dRj52SRbdmin1DAcuId_qsZSLbg1BQy1IJ3BEHp0ZVBT9E3DsxFQ-AvH6H-AdsixrDb0niDxkycSyMGT_5hK549AEo86UNSP2bnVwrqoJvWpRc3O0giBBU5ukk9gpMLGJjYTBX0L5B3bt3LbbchnejnKPdr83xLHhxtQg/s3388/PXL_20220416_203502116.jpg', g: ['stilllife'], p: '$500' },
  { y: 2022, t: 'Blue Vase', h: 10, w: 8, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9Hfb_jno0YVCUhAyoi-sBTAzjzC_5TmOI0EA3KBemkEUWUuIbDPRh9MPC23jqApvd3_Xlm84O61qniBHhgzWQdiVPb5KhwX_jIQMfkbPBSPLlZH-u79JYX1gsIorwMqUfB-8ZGi81riG9EvLF-YsutJZ6bFzh35ZCmt3Wu_l0fX6KLI3i6fUmrRTP3Q/s3622/PXL_20220326_011703649.jpg', g: ['stilllife'], p: '$500' },
  { y: 2022, t: 'Radishes', h: 6, w: 8, m: 'Oil on canvas panel', u: 'https://blogger.googleusercontent.com/img/a/AVvXsEjhLyN4BBWh7VQ4rt4N_a-7PQlf6x28RcS9oVumoqTDYzX4Z2nLBuFxzinqjBCAeTJsEoKaXIEH7T6dQ2t932bWxHZoyhOd_1bnVXk1vF-JiDbK1SnaJM_0QfW8C1Ci4XqKmg4wd5y-WLFvlrQHypQplf6qg6QyukX_naJA5zgpxmCGN_P6QS9ee1rMhA=s3385', g: ['stilllife'], p: '$250' },
  { y: 2022, t: 'What\'s Cooking', h: 9, w: 12, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/a/AVvXsEjBAOZxIckTkvN995Vg6qI3R_cIr1fekOeM8xlYVoiJD11ZXJwKgcWD8O1zegibpihLDGH8nT3Ko5TIVaxM3lEAs534lUO9v2f8Mwb5CPVZn-C7PzZJeQbBzx2S14JeEfY2h-UQOyNPNdRJKdl8Gvd_Va-Bt00WWVgHYFgfGTsmbdY11_KH7uT78945tQ=s3473', g: ['stilllife'], p: '$600' },

  { y: 2021, t: 'Roses in My Yard', h: 11, w: 14, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-yPydXc1unFA/YQhxowuNuQI/AAAAAAAC-jU/VOCylj-e_KIXwtv3ppZTkNhtN8-S9TKQwCPcBGAsYHg/s3037/PXL_20210627_152401480.jpg', g: ['stilllife'], p: '$700' },
  { y: 2021, t: 'Tea Roses in Vase', h: 10, w: 8, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-iRPx4XKZW1A/YQhxo5JrSGI/AAAAAAAC-jU/JWymk0x0VDwAzZufgE_C5F51-eWhudimQCPcBGAsYHg/s2199/PXL_20210614_061650872.jpg', g: ['stilllife'], p: '$500' },

  { y: 2018, t: 'Sunflower', w: 8, h: 8, m: 'Oil on canvas', u: 'https://2.bp.blogspot.com/-bFq2k2mMMEU/Wx14tqJtJrI/AAAAAAAB8ew/8yyW_E4Igps7BlBWrUF5Qak9RUqIUNjTwCKgBGAs/s1600/IMG_20180610_121205301.jpg', g: ['stilllife'], p: '$300' },

  { y: 2022, t: 'Gloria in Summer Blues', w: 11, h: 14, m: 'Oil on panel', u: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzH0KNLBuFuBP_tCZdoiQwi-hYw7Q7NOmUegEiRysx1cmJkO1n1mXwLi0ai-qT-3vEVgQEnIK2Ss29GRtV3ITATetdqTTXiYV6xHCC5TRxYXoL4PxLBxsalAlNWtNpf51iNJZhKNcBGI6SDHYlL02143TihYDfTq4AqbfW9j1uBDhTBveWpB8gXOpQeg/s3559/PXL_20221226_044044062~2.jpg', g: ['people'], p: '$700' },
  { y: 2019, t: 'Blue Dress', w: 12, h: 16, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-SqPPSJlanuo/YacQKL6RYyI/AAAAAAADFrM/lNoHumqfECURKyi3oSYajDThASSmw53NwCPcBGAsYHg/s3641/PXL_20211021_161434642.jpg', g: ['people'], p: '$750' },
  { y: 2018, t: 'Jamie', w: 16, h: 20, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-0qyj1DfuDxo/WxTSKFns9lI/AAAAAAAB74k/Z2dgCkySErMuSXJO2Lla3OTx7B3lu0bIQCKgBGAs/s1600/IMG_20180530_084642376.jpg', g: ['people'], p: '$1200' },
  { y: 2012, t: 'Iris', 'm': 'Oil on panel', w: 14, h: 11, u: 'https://1.bp.blogspot.com/-1QTHLUnOye0/T2GAMlnfACI/AAAAAAAAGhM/x_mgRmdub_s/s320/20120310_Iris.jpg', g: ['people'], p: 'sold' },
];

var setImage = function (i) {
  $('#carousel').carousel(i);
  $('html, body').animate({
    scrollTop: $('#carousel').offset().top
  }, 200);
};

/* Navbar smooth scroll and active state */
$('.nav-item, .navbar-brand').on('click', function () {
  var sectionTo = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(sectionTo).offset().top
  }, 300);

  $('.navbar-nav').find('.active').removeClass('active');
  $(this).addClass('active');
});

/* Install the portfolio. */
function addImages(p, group) {
  $('#portfolio-contents').empty();
  $('#carousel>.carousel-inner').empty();

  /* Filter pictures on selected group if any */
  $.each(p.filter(p => !group || p.g.indexOf(group) > -1), function (i, it) {
    var yearStr = (it.y ? ' (' + it.y + ')' : '');
    var line2 = (it.m ? it.m + ', ' : '') + it.h + '″×' + it.w + '″';
    var line3 = it.p ? (it.p) : '';

    /* Add the thumbnails */
    var tooltipHtml = '<i>' + it.t + '</i>' + yearStr + '<br/><small>' + line2 + (line3 ? ', ' + line3 : '') + '</small>';
    $('<a/>')
      .addClass('col-lg-3')
      .addClass('img-thumbnail')
      .addClass('p-1')
      .addClass('m-2')
      .attr({ 'title': tooltipHtml, 'onclick': 'setImage(' + i + ')' })
      .append($('<img/>')
        .attr({ 'style': 'background-image:url("' + it.u + '")' }))
      .hide()
      .delay(50 * i)
      .fadeIn()
      .appendTo($('#portfolio-contents'));

    /* Add the full-size image to the carousel. */
    var largeUrl = it.u.replace(/s320/, 's800');
    $('#carousel>.carousel-inner')
      .append($('<div/>')
        .addClass('carousel-item')
        .append($('<img/>')
          .attr({ 'src': largeUrl, 'alt': '' })
          .addClass('d-block')
          .addClass('rounded'))
        .append($('<div/>').addClass('carousel-caption d-md-block')
          .append($('<strong/>')
            .append($('<i/>').text(it.t))
            .append(document.createTextNode(yearStr)))
          .append($('<div/>').text(line2))
          .append($('<div/>').text(line3))));
  });
  /* Activate the first item. */
  $('#carousel .carousel-item:first').addClass('active');
  /* Activate tooltips on the thumbnails. */
  $('.img-thumbnail').tooltip({ 'html': true, 'placement': 'auto' });
};

addImages(p);

/* Install portfolio filter controls */
$('#portfolio-filter .btn').on('click', function () {
  $('#portfolio-filter').find('.text-primary').removeClass('text-primary');
  $(this).addClass('text-primary');

  const group = $(this).attr('group') || '';
  addImages(p, group);

  $('html, body').animate({
    scrollTop: $('#portfolio').offset().top
  }, 300);
});

/* Support swipe on carousel */
$('#carousel').swipe({
  swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');
  },
  allowPageScroll: 'vertical'
});

/* Enable keyboard shortcuts for the carousel. */
$(document).keydown(function (e) {
  if (e.which === 37) {
    $('#carousel').carousel('prev');
  } else if (e.which === 39) {
    $('#carousel').carousel('next');
  } else {
    return;
  }
  e.preventDefault();
});
