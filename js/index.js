var p = [
  { y: 2019, t: 'Evening light through the branches', w: 9, h: 12, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-8CQNcMUto1w/XcpV8y9e-MI/AAAAAAACdKw/cbBNfyfZ2hAiTCQQxqK3JdI0PRX4XBLEQCKgBGAsYHg/s1600/IMG_20190906_233609.jpg', g: ['people'], p: '$450' },
  { y: 2019, t: 'White Dress', w: 12, h: 16, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-sFF1f2Ogd08/XWTLktGLjSI/AAAAAAACYk0/yFLeLeHHguUlRQbLDvNXaovyfdNtldihgCKgBGAs/s1600/IMG_20190826_230022.jpg', g: ['people'], p: '$450' },
  { y: 2019, t: 'Blue Dress', w: 12, h: 16, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-nPzOI3irGM8/XWTIc4kBQdI/AAAAAAACYkg/z4H0OrFvcP08n5TUJn83094OpepdIsRgACKgBGAs/s1600/IMG_20190825_171721.jpg', g: ['people'], p: '$450' },
  { y: 2019, t: 'Amneris', w: 12, h: 16, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-c5uIdYMGuvQ/XVeNSa8_Y8I/AAAAAAACYAg/QdXS_hNEZxIkx28p7ve7V76wo3U5dd6EQCKgBGAs/s1600/IMG_20190815_233354.jpg', g: ['landscape'], p: '$550' },
  { y: 2019, t: 'Evening Glow', w: 12, h: 9, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-fJOc9vvho_o/XUUi3Pih8tI/AAAAAAACXks/a5zCE1lbQkgqYGFNL2ouvzHObDFmMTh-ACKgBGAs/s1600/IMG_20190802_225054.jpg', g: ['landscape'], p: '$450' },
  { y: 2019, t: 'Falls at Bellevue Botanical Garden', w: 12, h: 16, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-OCi1tyRbkeU/XSQ7C2B-chI/AAAAAAACWCw/nvebm9tGVkY-8N8Voh176vza_J3q1p9FQCKgBGAs/s1600/IMG_20190706_220122.jpg', g: ['landscape'], p: '$550' },
  { y: 2019, t: 'Evans Creek', w: 16, h: 20, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-vSX3-ipCIYM/XSQ25RoOQkI/AAAAAAACWBY/Qu9Qe6clSYYxRVOnCU5OJOEp7OiKXLJtgCKgBGAs/s1600/IMG_20190422_084834893.jpg', g: ['landscape'], p: '$700' },
  { y: 2019, t: 'Last Golds', w: 16, h: 12, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-PzkhwQK4LAE/XSQ4hI_Mm-I/AAAAAAACWB0/eJYDZSYTwZEwC48eaNTPx_eH-GNSOa5kACKgBGAs/s1600/IMG_20181225_095456271.jpg', g: ['landscape'], p: '$550' },

  { y: 2018, t: 'Last Reds', w: 24, h: 18, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-nXN8wxHhDHw/W_ze8X9MtDI/AAAAAAACFnU/taaXf8_RI0oK5TcVkGrl4MNe_SBoLhZFACKgBGAs/s1600/IMG_20181112_082543710.jpg', g: ['landscape'], p: '$900' },
  { y: 2018, t: 'Red Shed', w: 12, h: 12, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-75jw9oLQreI/W81ba1LKUGI/AAAAAAACDds/VTxEDmVZeiIP84ojg9Ndw4FhAOPGoiFTQCKgBGAs/s1600/IMG_20181021_130553278.jpg', g: ['landscape'], p: '$450' },
  { y: 2018, t: 'Fall Colors II', w: 16, h: 12, m: 'Oil on panel', u: 'https://4.bp.blogspot.com/-3f8QFrzGTKI/W8u-1wR4btI/AAAAAAACDSM/2OX52GBrS7svdgmKk8Qa-X1e7XOmiy4MQCKgBGAs/s1600/IMG_20181020_163806290.jpg', g: ['landscape'], p: '$550' },
  { y: 2018, t: 'Fall Colors I', w: 10, h: 10, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-6ySFVlSnRnc/W8Ih_Qwj3-I/AAAAAAACCuk/S2YHnj8sf1U0jc-o5U9UjG2L3O-9q01eACKgBGAs/s1600/IMG_20181013_093957287.jpg', g: ['landscape'], p: '$500' },
  { y: 2018, t: 'Snoqualmie River from Sandy Cove Park', w: 12, h: 9, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-l3Bh4ehZUu8/W46hAAFw9fI/AAAAAAACBnw/yQG3KuJNWsEBiRllmOvtQOhXmzFvcM07wCKgBGAs/s1600/IMG_20180904_080931019.jpg', g: ['landscape'], p: '$450' },
  { y: 2018, t: 'Sunset at Juanita Bay', w: 14, h: 11, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-D7-x9cLbyCg/W3sLhjh0jHI/AAAAAAACAtw/Dxz3ZbP4280rL6S4V_Wad5F2NnShMYMpACKgBGAs/s1600/IMG_20180820_073235802.jpg', g: ['landscape'], p: '$500' },
  { y: 2018, t: 'Mallet at Snoqualmie', w: 14, h: 11, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-Op9CPzKfEYY/W3kM2qZZ4RI/AAAAAAACAmk/X_YtVjEZMFMbZ8WU23qKCf0FgB52PTeTwCKgBGAs/s1600/IMG_20180818_134529396_HDR.jpg', g: ['landscape'], p: '$500' },
  { y: 2018, t: 'Steps to the Garden', w: 8, h: 10, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-5lC1c6ZBLTI/W3EjLxeMvuI/AAAAAAACAZo/k9NwFvC-g_Uh3LePSXp8A9hWY_-xx4cWwCKgBGAs/s1600/IMG_20180730_191234181.jpg', g: ['landscape'], p: '$300' },
  { y: 2018, t: 'Heritage Hall in Evening Light', w: 20, h: 16, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-RaLzw7R3CWg/W3EiCpaA3MI/AAAAAAACAZM/gxWtBgBZU2MneUhZg0J0jaPCY41FgKYwACKgBGAs/s1600/IMG_20180726_201714400_HDR.jpg', g: ['landscape'], p: '$700' },
  { y: 2018, t: 'Bothell Landing Bridge', w: 20, h: 16, m: 'Oil on canvas', u: 'https://2.bp.blogspot.com/-RbthYzD6FHQ/Wz2_FdEXvbI/AAAAAAAB-Ow/eVOF3_kZWoo_n7JfZqALWrWh2RuPxEoEgCKgBGAs/s1600/IMG_20180701_094823440.jpg', g: ['landscape'], p: '$700' },
  { y: 2018, t: 'Kalaloch Mist', w: 14, h: 11, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-EmeFh9JA9vU/WrnQkfFra3I/AAAAAAAB1lw/Kfowo56SP1UkrGPslXmYYSbE-P3Xk_kdwCKgBGAs/s1600/IMG_20180326_220001424.jpg', g: ['landscape'], p: '$500' },
  { y: 2018, t: 'Three Arch Rocks', w: 12, h: 12, m: 'Oil on panel', u: 'https://2.bp.blogspot.com/-tALiQn_CZG0/WlObc-q4SZI/AAAAAAAByJU/zEwqnkeAb5sAwN5N3KNv6QGgCZolWA4sgCKgBGAs/s1600/IMG_20180108_082134.jpg', g: ['landscape'], p: '$450' },
  { y: 2018, t: 'Snowy Pass', w: 16, h: 12, m: 'Oil on panel', u: 'https://3.bp.blogspot.com/-DwQLkDlKH5Q/Wj9d82JjAPI/AAAAAAABxTU/bN7IGUYah0gPF72NtKraD8ncGMC16vfBgCKgBGAs/s1600/IMG_20171214_082935.jpg', g: ['landscape'], p: '$550' },

  { y: 2018, t: 'Sunflower', w: 8, h: 8, m: 'Oil on canvas', u: 'https://2.bp.blogspot.com/-bFq2k2mMMEU/Wx14tqJtJrI/AAAAAAAB8ew/8yyW_E4Igps7BlBWrUF5Qak9RUqIUNjTwCKgBGAs/s1600/IMG_20180610_121205301.jpg', g: ['stilllife'], p: '$250' },


  { y: 2018, t: 'Jenny', w: 18, h: 24, m: 'Graphite on paper', u: 'https://3.bp.blogspot.com/-Ji2V5rpkjmw/XATPaGU3d1I/AAAAAAACF7M/Nr0bxN7YBIY5_6g2NKMFftLxDKENbDEdwCKgBGAs/s1600/IMG_20181202_121216474.jpg', g: ['people'], p: '$200' },
  { y: 2018, t: 'Jamie', w: 16, h: 20, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-0qyj1DfuDxo/WxTSKFns9lI/AAAAAAAB74k/Z2dgCkySErMuSXJO2Lla3OTx7B3lu0bIQCKgBGAs/s1600/IMG_20180530_084642376.jpg', g: ['people'], p: '$800' },


  { y: 2017, t: 'Winter Marsh', w: 40, h: 30, m: 'Oil on canvas', u: 'https://2.bp.blogspot.com/-DRTGQuS3kFY/WimsvoogpMI/AAAAAAABvUE/CLS9RCbNGac8GRIV32ns_93miLXeH6tagCKgBGAs/s1600/IMG_20171207_081551.jpg', g: ['landscape'], p: '$2500' },
  { y: 2017, t: 'Venice in Morning Haze', w: 12, h: 16, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-SK49xP4AJtQ/Wg0wx95cfAI/AAAAAAABuEQ/P0oqYYqmpYwIatOIaqYG59u-iikqBwI3wCKgBGAs/s1600/IMG_20171115_222954.jpg', g: ['landscape'], p: '$550' },
  { y: 2017, t: 'Mt. Shuksan from Picture Lake', w: 20, h: 16, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-jfUtEdfzWGc/Wfqx8KiubCI/AAAAAAABtcw/XA8i3SZOH382Gyw55AJ4hPB9Xj0jwbMcQCKgBGAs/s1600/IMG_20171031_082328.jpg', g: ['landscape'], p: '$700' },
  { y: 2017, t: 'A Valley Near Artist Point', w: 16, h: 12, m: 'Oil on canvas', u: 'https://2.bp.blogspot.com/-ID-GN95ae14/WehDtXaVbpI/AAAAAAABsxQ/gWkqkcMyvQYlU31ZyY53fSQfcHDof1alwCKgBGAs/s1600/IMG_20171018_225930.jpg', g: ['landscape'], p: '$550' },
  { y: 2017, t: 'View of Mt. Hood', w: 30, h: 15, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-DoHMdl4FyOQ/WcKIJfZPtEI/AAAAAAABryw/6WXYVWDO5RUYBbPLZkEbB1YBSe2cXnlZgCKgBGAs/s1600/IMG_20170918_083637.jpg', g: ['landscape'], p: '$800' },
  { y: 2017, t: 'In the Woods at Juanita Beach', w: 12, h: 16, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-SK49xP4AJtQ/Wg0wx95cfAI/AAAAAAABuEQ/P0oqYYqmpYwIatOIaqYG59u-iikqBwI3wCKgBGAs/s1600/IMG_20171115_222954.jpg', g: ['landscape'], p: '$550' },
  { y: 2017, t: 'Morning Calm', w: 16, h: 12, m: 'Oil on canvas', u: 'https://2.bp.blogspot.com/-7Hkzm6CFOP8/WYF0Ab0hL0I/AAAAAAABpDM/ew4dqyTfISYWGKHwRePB0wofBAM8kYayQCKgBGAs/s1600/IMG_20170801_073522.jpg', g: ['landscape'], p: '$550' },
  { y: 2017, t: 'Dirigo in Sunset', w: 12, h: 16, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-mBJpkTxct24/WXl_4e0P2kI/AAAAAAABo5I/nVcz7J47HHIJ88MBUgKlqJd7ENYn8gMjgCKgBGAs/s1600/IMG_20170726_224839.jpg', g: ['landscape'], p: 'sold' },
  { y: 2017, t: 'Kirkland Marina Sunset', w: 8, h: 6, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-SVhjqkTKKrI/WH_779rlCFI/AAAAAAABinM/e7SWCJiKB5gCZUC9IK2JTFEAkCdvb9_NACPcB/s1600/IMG_20170116_154423.jpg', g: ['miniature'], p: '$200' },
  { y: 2016, t: 'Fall Colors', w: 18, h: 24, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-jgP51oA9MDs/WG_uql4pJtI/AAAAAAABh6U/AIp8E1sqSdkRIKtBIPJsMm_3M-t330IAACPcB/s1600/IMG_20170106_081626.jpg', g: ['landscape'], p: '$850' },
  { y: 2016, t: 'Campground Morning', w: 18, h: 24, m: 'Oil on canvas', u: 'https://2.bp.blogspot.com/-ZG5qfqHewtM/WDqE5O39C3I/AAAAAAABfUg/NEBwMP07l60pZCN3PhjrC6fYMGh4GMWDACPcB/s1600/IMG_20161126_133202.jpg', g: ['landscape'], p: 'sold' },
  { y: 2016, t: 'Sunset over Lake Washington', w: 14, h: 11, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-6uCYD9FxMRs/V-bw5jV_wEI/AAAAAAABdv8/In0FQl-_PmAcnjIErPaqwfnvoA8cp-MOwCPcB/s1600/IMG_20160924_074220.jpg', g: ['landscape'], p: '$400' },
  { y: 2016, t: 'View of Snohomish Valley III', w: 20, h: 16, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-2slieA3ARKA/V8zzfjnyn0I/AAAAAAABdKg/8EK4yrxKRw4aP4MzaU_zaUYoptavz274ACPcB/s1600/IMG_20160828_091044.jpg', g: ['landscape'], p: '$700' },
  { y: 2016, t: 'Evening Light', w: 12, h: 16, m: 'Oil on canvas', u: 'https://2.bp.blogspot.com/-mLWVV7TjbRU/VzlNstJg-RI/AAAAAAABZds/A0EWtt1w59kUQD4tCum0_XdK3cyjXNdmgCKgB/s1600/IMG_20160515_180428.jpg', g: ['landscape'], p: '$450' },
  { y: 2016, t: 'Before Sunset', w: 12, h: 16, m: 'Oil on canvas', u: 'https://2.bp.blogspot.com/-GT_Mlof5Itc/Vxh6MImA5sI/AAAAAAABY_s/CAHTJNQjpQY0nkTkp84R26B5k3hv1WkxwCKgB/s1600/IMG_20160420_194628.jpg', g: ['landscape'], p: '$450' },
  { y: 2016, t: 'Uganda Couple', w: 14, h: 11, m: 'Pencil on paper', u: 'https://1.bp.blogspot.com/-uK-FrO2ybp0/VpyQulUw3cI/AAAAAAABUsI/YioBk2MvMfs/s1600/20160115_couple_portrait_finished.jpg', g: ['people'], p: '$150' },


  { y: 2015, t: 'Edmonds Marsh II', w: 24, h: 12, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-hSjQnhd5hPQ/VisYNZRPFWI/AAAAAAABSMs/OpHnm0gL5lQ/s1600/201509_EdmondsMarshII.jpg', g: ['landscape'], p: '$550' },
  { y: 2015, t: 'Edmonds Marsh', w: 20, h: 16, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-ej0cZBmDlCA/VexbocS3LaI/AAAAAAABQpk/AarJ8weleWE/s1600/IMG_20150906_081410.jpg', g: ['landscape'], p: '$700' },
  { y: 2015, t: 'Light Through the Woods', w: 28, h: 22, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-aLgf3VSfmV4/VdTjxm6w4oI/AAAAAAABQME/MzUG1jFpEgE/s1600/IMG_20150819_070310.jpg', g: ['landscape'], p: '$1200' },
  { y: 2017, t: 'Juanita Beach Lily Pond', w: 16, h: 12, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-1tRuf9rjMno/VbPWo6k5B7I/AAAAAAABPj0/UF7WMfEeVwM/s1600/20150725_JuanitaBeachIII_LilyPond_finished.jpg', g: ['landscape'], p: '$450' },
  { y: 2017, t: 'Juanita Beach II: The Trunks', w: 12, h: 16, m: 'Oil on canvas', u: 'https://2.bp.blogspot.com/-CKB50DFheJc/VbPQFeCj8iI/AAAAAAABPjc/VsrmZmYGI3o/s1600/20150725_JuanitaBeachII_finished.jpg', g: ['landscape'], p: '$450' },
  { y: 2017, t: 'Juanita Beach I', w: 16, h: 12, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-Tyvgl6WJzds/VaapjgR2RZI/AAAAAAABPQ4/Y5QG3t747UE/s1600/IMG_20150714_064922.jpg', g: ['landscape'], p: '$450' },
  { y: 2017, t: 'Winter Roses', w: 12, h: 16, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-CsGSuUUcZiw/VWz1C0Yf2cI/AAAAAAABINE/CFBPX9AJqwo/s1600/20150525_white_roses_12x16.jpg', g: ['stilllife'], p: '$450' },


  { y: 2013, t: 'Under the Palm Trees', w: 14, h: 11, u: 'https://lh3.ggpht.com/-D0GZwylaFqU/UpGbS8YTZYI/AAAAAAAASVI/kEDPEpl_qAs/s320/20131122_PalmTreeAndOcean_final.jpg', g: ['landscape'], p: '$300' },
  { y: 2013, t: 'Timeless', 'm': 'Oil on canvas', w: 18, h: 24, u: 'https://lh3.ggpht.com/-liOVxuaVVDg/UkeHSG48jHI/AAAAAAAARPI/mnEOQIy4eA4/s320/DSC_9460.jpg', g: ['people'], p: '$900' },
  { y: 2012, t: 'Poplars\' Notes', 'm': 'Oil on canvas', w: 16, h: 20, u: 'https://4.bp.blogspot.com/-pPo408_LG2M/UOKLcIwF0TI/AAAAAAAAKvU/dUtGfqXEOFs/s320/20121229_Poplars.jpg', g: ['landscape'], p: '$400' },
  { y: 2012, t: 'A Summer Eve', 'm': 'Oil on canvas', w: 16, h: 20, u: 'https://1.bp.blogspot.com/-aFpive-Vz0k/UD_M5SEfzvI/AAAAAAAAJp0/h7HG_R7kI-8/s320/20120826_06MadridClouds.jpeg', g: ['landscape'], p: '$700' },
  { y: 2009, t: 'Winter Sunset', 'm': 'Oil', w: 14, h: 11, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/Sy2B8SUGbQI/AAAAAAAACsY/0RfgeWCL9Q4/s320/200911WinterSunset.jpg', g: ['landscape'], p: '$300' },
  { y: 2010, t: 'Winter Sunset II', 'm': 'Oil', w: 24, h: 18, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/S6WiwntREyI/AAAAAAAAC64/5OVRdCWF2cg/s320/201002WinterSunSet2.jpg', g: ['landscape'], p: '$350' },
  { y: 2006, t: 'Snow Day', 'm': 'Oil', w: 8, h: 10, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/Sy2B8EU67YI/AAAAAAAACsQ/_cpw07lQUcY/s320/200612SnowDay.jpg', g: ['landscape'], p: '$200' },
  { y: 2009, t: 'Red', 'm': 'Oil', w: 8, h: 10, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/Sy11Cxy8u4I/AAAAAAAACrw/lxnK6EqdOoc/s320/200910Red.jpg', g: ['landscape'], p: '$200'},
  { y: 2006, t: 'Sunset over Kirkland Marina', 'm': 'Oil', w: 14, h: 11, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/Sy11B6EY0TI/AAAAAAAACrY/sqeGl-kUfRk/s320/20060912Sunset+Over+Kirkland+Marina.jpg', g: ['landscape'], p: 'sold' },
  { y: 2010, t: 'Crashing Waves', 'm': 'Oil on canvas', w: 20, h: 16, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/TDS-RHFLdAI/AAAAAAAADKg/_qi4RPpxgIs/s320/201006BigSurWave.JPG', g: ['landscape'], p: '$500' },
  { y: 2010, t: 'On the Farm', 'm': 'Oil', w: 14, h: 11, u: 'https://1.bp.blogspot.com/_hHE21tS1Nog/TGcqv2nQCuI/AAAAAAAADSY/WDqkHmCglNk/s320/201007SunsetOnFarm_small.JPG', g: ['landscape'], p: '$300' },
  { y: 2010, t: 'Summer Garden', 'm': 'Oil on canvas', w: 11, h: 14, u: 'https://4.bp.blogspot.com/_hHE21tS1Nog/TGcqvuCYF4I/AAAAAAAADSQ/8qFzjR1_7hw/s320/201007SummerGarden_small.JPG', g: ['landscape'], p: '$300' },
  { y: 2009, t: 'Chasing Tide', 'm': 'Oil on canvas', w: 10, h: 8, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/SqZz1tvfy2I/AAAAAAAACeA/cZt9uzEbEqg/s320/20090904_ChasingTides_01.JPG', g: ['stilllife'], p: '$200' },
  { y: 2009, t: 'Chasing Tide II', 'm': 'Oil on canvas', w: 10, h: 8, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/Ssk6AmlRnTI/AAAAAAAACfY/jIwdIPUwK7o/s320/20090929_ChasingTide2_Unframed.JPG', g: ['stilllife'], p: '$200' },
  { y: 2009, t: 'The Trio', 'm': 'Oil', w: 11, h: 14, u: 'https://1.bp.blogspot.com/_hHE21tS1Nog/Sy2B7vDXx4I/AAAAAAAACsI/SZTLAqUsoYk/s320/200911TheTrio.jpg', g: ['stilllife'], p: '$250' },
  { y: 2009, t: 'Sugar, Please', 'm': 'Oil', w: 12, h: 9, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/SvkCqUvBmcI/AAAAAAAAChc/KNSsmEsmrIE/s320/Min+Zhong+-+Sugar+Please.jpg', g: ['stilllife'], p: '$250' },
  { y: 2012, t: 'Iris', 'm': 'Oil on panel', w: 14, h: 11, u: 'https://1.bp.blogspot.com/-1QTHLUnOye0/T2GAMlnfACI/AAAAAAAAGhM/x_mgRmdub_s/s320/20120310_Iris.jpg', g: ['people'], p: 'sold' },
  { y: 2011, t: 'Wishing for Snow', 'm': 'Oil', w: 8, h: 10, u: 'https://1.bp.blogspot.com/-lVnoptqnSIg/Tecbr82wPNI/AAAAAAAADbM/CqsFioLkgOE/s320/201101_Hui_0.JPG', g: ['people'], p: 'sold' },
  { y: 2010, t: 'In My Garden', 'm': 'Oil', w: 8, h: 10, u: 'https://4.bp.blogspot.com/_hHE21tS1Nog/TUZI0SZO1RI/AAAAAAAADWI/lRipLTzygos/s320/201012_Gladys_6.JPG', g: ['people'], p: 'NFS' },
  { y: 2010, t: 'The Curious Twos', 'm': 'Oil', w: 8, h: 10, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/S3zklTjr79I/AAAAAAAAC50/ymseQCCAMoU/s320/201001_TheCuriousTwos.jpg', g: ['people'], p: 'NFS' },
  { y: 2013, t: 'Clouds over Lake', 'm': 'Oil on canvas', w: 5, h: 5, u: 'https://3.bp.blogspot.com/-eA0tzIlOm9Q/UXIq5D-oofI/AAAAAAAALG4/iaeRMamrisc/s320/201303_CoolCloudsWholeSky5x5.JPG', g: ['miniature'], p: 'sold' },
  { y: 2013, t: 'Clouds over Mountain', 'm': 'Oil on canvas', w: 5, h: 5, u: 'https://4.bp.blogspot.com/-DGxf37g4bMA/UXIq_NzVPAI/AAAAAAAALHA/XIvGwyGKlU8/s320/201302_CloudsOverMtn5x5.JPG', g: ['miniature'], p: 'sold' },
  { y: 2013, t: 'Bird', 'm': 'Oil on canvas', w: 5, h: 5, u: 'https://2.bp.blogspot.com/-qKYi2-IvAbs/UXIrEMnzOTI/AAAAAAAALHI/ZBq6iA4Rasc/s320/20130417WhiteBirdInBlue5x5Edmonds.JPG', g: ['miniature'], p: 'sold' },
  { y: 2011, t: 'Clouds over the Prarie', 'm': 'Oil', w: 7, h: 5, u: 'https://2.bp.blogspot.com/-y6SS6lyX_v8/TvgwkaVVXjI/AAAAAAAAFoY/ROO1feQlbj0/s320/201112_FieldClouds.JPG', g: ['miniature'], p: '$100' },
  { y: 2010, t: 'Ocean Melody I', 'm': 'Oil', w: 7, h: 5, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/S3zkk7EkmNI/AAAAAAAAC5s/xpbqui5ubTc/s320/201001_OceanMelodyI.jpg', g: ['miniature'], p: 'sold' },
  { y: 2010, t: 'Ocean Melody II', 'm': 'Oil', w: 7, h: 5, u: 'https://1.bp.blogspot.com/_hHE21tS1Nog/S3zkkaAxd8I/AAAAAAAAC5k/Mm-zGeHntLI/s320/201001_OceanMelodyII.jpg', g: ['miniature'], p: 'sold' },
  { y: 2010, t: 'Red Peppers', 'm': 'Oil', w: 7, h: 5, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/S7l_6uBZT6I/AAAAAAAAC-Y/-DkAP80lWD4/s320/201003RedPeppers_0.JPG', g: ['miniature'], p: '$100' },
  { y: 2009, t: 'Cherry Hearts', 'm': 'Oil', w: 5, h: 7, u: 'https://4.bp.blogspot.com/_hHE21tS1Nog/SvkDC8BBAGI/AAAAAAAACh8/HQx993BKoPg/s320/Min+Zhong+-+Cherry+Hearts.jpg', g: ['miniature'], p: '$100' },
  { y: 2009, t: 'Ruby Red', 'm': 'Oil', w: 7, h: 5, u: 'https://1.bp.blogspot.com/_hHE21tS1Nog/SvkDCoCLN9I/AAAAAAAACh0/xebmULkfmYQ/s320/Min+Zhong+-+Ruby+Red.jpg', g: ['miniature'], p: '$100' },
  { y: 2009, t: 'Spoonful', 'm': 'Oil', w: 7, h: 5, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/SvkCq5TH3TI/AAAAAAAAChs/1bLHdmJTBGI/s320/Min+Zhong+-+Spoonful.jpg', g: ['miniature'], p: '$100' },
  { y: 2009, t: 'Sunday Afternoon Siesta', 'm': 'Oil', w: 5, h: 7, u: 'https://4.bp.blogspot.com/_hHE21tS1Nog/SvkCqjRO8DI/AAAAAAAAChk/9I2fuwyK0Yk/s320/Min+Zhong+-+Sunday+Afternoon+Siesta.jpg', g: ['miniature'], p: '$100' },
  { y: 2009, t: 'Three Stooges', 'm': 'Oil', w: 8, h: 6, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/St1Pp4w42oI/AAAAAAAACgM/7-EBWBKLEnA/s320/20091018_3Stuges_00.JPG', g: ['miniature'], p: '$100' },
  { y: 2010, t: 'Silver Lining', 'm': 'Oil', w: 7, h: 5, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/TGcvQd8_o0I/AAAAAAAADS4/YD4wA0aYMlk/s320/201006SilverLining_small.jpg', g: ['miniature'], p: '$100' },
  { y: 2010, t: 'Silver Lining II', 'm': 'Oil', w: 7, h: 5, u: 'https://1.bp.blogspot.com/_hHE21tS1Nog/TGcuL5xwr_I/AAAAAAAADSo/cmWgPcMMLjU/s320/Silverlining2_small.jpg', g: ['miniature'], p: '$100' }
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
    var line2 = (it.m ? it.m + ', ' : '') + it.w + '″×' + it.h + '″';
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
