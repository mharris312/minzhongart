var p = [
  { y: 2021, t: 'Fall Colors By the Ball Park', h: 16, w: 20, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-N-XGT6VaV-I/YaXKnBLMaHI/AAAAAAADFgE/j5AAhwvvyYc0gttwPuCif_sA0TlixeTbwCPcBGAsYHg/s3518/PXL_20211108_064222955.jpg', g: ['landscape'], p: '$700' },
  { y: 2021, t: 'Morning River Rocks', h: 11, w: 14, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-FSHFrl9HVHg/YaXJ2fEh4oI/AAAAAAADFf8/u1wChXLkAZUgEaIaJbHUj6HQCF-i_0MJwCPcBGAsYHg/s3278/PXL_20211126_234108854.jpg', g: ['landscape'], p: '$500' },
  { y: 2021, t: 'Cady Park Bridge', h: 16, w: 20, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-J8sVz80HuyA/YaMcrKhtZeI/AAAAAAADFZQ/JJImO5uMnIoXNbxSz11lf7EWAr4YIHd4wCPcBGAsYHg/s3584/PXL_20211011_163931931.jpg', g: ['landscape'], p: '$700' },
  { y: 2021, t: 'School at Nocturn', h: 8, w: 10, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-8jL-vvxOhes/YaWCthCugfI/AAAAAAADFe0/FjNczHwekE4xpsj2DBqYBnq6hiHLzu_3gCPcBGAsYHg/s3043/PXL_20211119_213349996.jpg', g: ['landscape'], p: '$300' },
  { y: 2021, t: 'View of Lake Sammamish From a Hill Top', h: 9, w: 12, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-aGE2j0y7u44/YTXL1OfqT8I/AAAAAAADAns/4CZdyBQnOPIaZpMdv2rZr5de5HqIREVAwCPcBGAsYHg/s3386/original_c2a05073-f7b2-42d1-a51a-018a123ac574_PXL_20210902_201551146.jpg', g: ['landscape'], p: '$450' },
  { y: 2021, t: 'Pink Blossoms in the Neighborhood', h: 8, w: 10, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-7Pd5mFHUSes/YQibklscgpI/AAAAAAAC-vA/ywJas31k_z0q55uTdjs-0P1iXyGtnJPagCPcBGAsYHg/s3536/PXL_20210409_023350153.jpg', g: ['landscape'], p: '$300' },
  { y: 2021, t: 'Branches on Sammamish River Trail', h: 8, w: 10, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-armaHUj5lEk/YQuEnkmrmRI/AAAAAAAC-74/-aEblZD9xZktA-qshYYJtjgaTlIricsSACPcBGAsYHg/s3354/PXL_20210308_081310627.jpg', g: ['landscape'], p: '$300' },

  { y: 2019, t: 'Evening light through the branches', w: 9, h: 12, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-8CQNcMUto1w/XcpV8y9e-MI/AAAAAAACdKw/cbBNfyfZ2hAiTCQQxqK3JdI0PRX4XBLEQCKgBGAsYHg/s1600/IMG_20190906_233609.jpg', g: ['landscape'], p: '$450' },
  { y: 2019, t: 'Amneris', w: 12, h: 16, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-c5uIdYMGuvQ/XVeNSa8_Y8I/AAAAAAACYAg/QdXS_hNEZxIkx28p7ve7V76wo3U5dd6EQCKgBGAs/s1600/IMG_20190815_233354.jpg', g: ['marinescape'], p: 'sold' },

  { y: 2018, t: 'Snoqualmie River from Sandy Cove Park', w: 12, h: 9, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-l3Bh4ehZUu8/W46hAAFw9fI/AAAAAAACBnw/yQG3KuJNWsEBiRllmOvtQOhXmzFvcM07wCKgBGAs/s1600/IMG_20180904_080931019.jpg', g: ['landscape'], p: '$450' },
  { y: 2018, t: 'Mallet at Snoqualmie', w: 14, h: 11, m: 'Oil on canvas', u: 'https://4.bp.blogspot.com/-Op9CPzKfEYY/W3kM2qZZ4RI/AAAAAAACAmk/X_YtVjEZMFMbZ8WU23qKCf0FgB52PTeTwCKgBGAs/s1600/IMG_20180818_134529396_HDR.jpg', g: ['stilllife'], p: '$500' },
  { y: 2017, t: 'Venice in Morning Haze', w: 12, h: 16, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-SK49xP4AJtQ/Wg0wx95cfAI/AAAAAAABuEQ/P0oqYYqmpYwIatOIaqYG59u-iikqBwI3wCKgBGAs/s1600/IMG_20171115_222954.jpg', g: ['landscape'], p: '$550' },
  { y: 2015, t: 'Light Through the Woods', w: 28, h: 22, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-aLgf3VSfmV4/VdTjxm6w4oI/AAAAAAABQME/MzUG1jFpEgE/s1600/IMG_20150819_070310.jpg', g: ['landscape'], p: '$1200' },

  { y: 2021, t: 'Still life with Copper Pots', h: 11, w: 14, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-8yJGRnsHAoE/YaXNmEMAmoI/AAAAAAADFgY/aTb-ljXa2rka_dyd0bGbeZO3yb8pmS2HgCPcBGAsYHg/s3502/PXL_20211124_062106590.jpg', g: ['stilllife'], p: '$500' },
  { y: 2021, t: 'Nostalgia', h: 14, w: 11, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-3JJTWHgWt4o/YaXMxU2vIuI/AAAAAAADFgQ/j0m6oFrlMLMH6Vob5otqa-OLHwRde7JXgCPcBGAsYHg/s3551/PXL_20211121_192745389.jpg', g: ['stilllife'], p: '$500' },
  { y: 2021, t: '1889 Tugboat Arthur Foss', h: 14, w: 11, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-c09s1zy7v94/YRTK-qBtmDI/AAAAAAAC_SA/yZFNGkt1XQg8USxzrkHPRqD5vO1MEi4fQCPcBGAsYHg/s2848/PXL_20210812_065837220.jpg', g: ['marinescape'], p: '$500' },
  { y: 2021, t: 'Lightship No. 83', h: 14, w: 11, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-im9uTqcodLY/YQhpMTJInYI/AAAAAAAC-iY/MU9yA3O53QEHHmyRGFbTopt1qYDXZDj_gCPcBGAsYHg/s3306/PXL_20210802_063144791.jpg', g: ['marinescape'], p: '$500' },
  { y: 2021, t: 'Roses in My Yard', h: 11, w: 14, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-yPydXc1unFA/YQhxowuNuQI/AAAAAAAC-jU/VOCylj-e_KIXwtv3ppZTkNhtN8-S9TKQwCPcBGAsYHg/s3037/PXL_20210627_152401480.jpg', g: ['stilllife'], p: '$500' },
  { y: 2021, t: 'Tea Roses in Vase', h: 10, w: 8, m: 'Oil on panel', u: 'https://1.bp.blogspot.com/-iRPx4XKZW1A/YQhxo5JrSGI/AAAAAAAC-jU/JWymk0x0VDwAzZufgE_C5F51-eWhudimQCPcBGAsYHg/s2199/PXL_20210614_061650872.jpg', g: ['stilllife'], p: '$300' },
  { y: 2018, t: 'Sunflower', w: 8, h: 8, m: 'Oil on canvas', u: 'https://2.bp.blogspot.com/-bFq2k2mMMEU/Wx14tqJtJrI/AAAAAAAB8ew/8yyW_E4Igps7BlBWrUF5Qak9RUqIUNjTwCKgBGAs/s1600/IMG_20180610_121205301.jpg', g: ['stilllife'], p: '$250' },

  { y: 2019, t: 'Blue Dress', w: 12, h: 16, m: 'Oil on canvas', u: 'https://1.bp.blogspot.com/-SqPPSJlanuo/YacQKL6RYyI/AAAAAAADFrM/lNoHumqfECURKyi3oSYajDThASSmw53NwCPcBGAsYHg/s3641/PXL_20211021_161434642.jpg', g: ['people'], p: '$450' },
  { y: 2018, t: 'Jamie', w: 16, h: 20, m: 'Oil on canvas', u: 'https://3.bp.blogspot.com/-0qyj1DfuDxo/WxTSKFns9lI/AAAAAAAB74k/Z2dgCkySErMuSXJO2Lla3OTx7B3lu0bIQCKgBGAs/s1600/IMG_20180530_084642376.jpg', g: ['people'], p: '$800' },
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
