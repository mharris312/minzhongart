var p = [
  { y: 2013, t: 'Under the Palm Trees', w: 14, h: 11, u: 'https://lh3.ggpht.com/-D0GZwylaFqU/UpGbS8YTZYI/AAAAAAAASVI/kEDPEpl_qAs/s320/20131122_PalmTreeAndOcean_final.jpg', g: ['landscape'] },
  { y: 2013, t: 'Timeless', 'm': 'Oil on canvas', w: 18, h: 24, u: 'https://lh3.ggpht.com/-liOVxuaVVDg/UkeHSG48jHI/AAAAAAAARPI/mnEOQIy4eA4/s320/DSC_9460.jpg', g: ['people'] },
  { y: 2012, t: 'Poplars\' Notes', 'm': 'Oil on canvas', w: 16, h: 20, u: 'https://4.bp.blogspot.com/-pPo408_LG2M/UOKLcIwF0TI/AAAAAAAAKvU/dUtGfqXEOFs/s320/20121229_Poplars.jpg', g: ['landscape'] },
  { y: 2012, t: 'A Summer Eve', 'm': 'Oil on canvas', w: 16, h: 20, u: 'https://1.bp.blogspot.com/-aFpive-Vz0k/UD_M5SEfzvI/AAAAAAAAJp0/h7HG_R7kI-8/s320/20120826_06MadridClouds.jpeg', g: ['landscape'] },
  { y: 2011, t: 'Sunset over the Mountains', 'm': 'Oil', w: 20, h: 16, u: 'https://1.bp.blogspot.com/-zwk-X9RkidU/Tvgv1FUso8I/AAAAAAAAFoE/lO8JdiwG1S4/s320/201112_03SunsetField.JPG', g: ['landscape'] },
  { y: 2011, t: 'Fields by Snake River', 'm': 'Oil', w: 24, h: 18, u: 'https://4.bp.blogspot.com/_hHE21tS1Nog/TUZI0Jfj6CI/AAAAAAAADWA/rOCP90Xrw0Q/s320/201101_IdahoField_5.JPG', g: ['landscape'] },
  { y: 2009, t: 'Winter Sunset', 'm': 'Oil', w: 14, h: 11, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/Sy2B8SUGbQI/AAAAAAAACsY/0RfgeWCL9Q4/s320/200911WinterSunset.jpg', g: ['landscape'] },
  { y: 2010, t: 'Winter Sunset II', 'm': 'Oil', w: 24, h: 18, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/S6WiwntREyI/AAAAAAAAC64/5OVRdCWF2cg/s320/201002WinterSunSet2.jpg', g: ['landscape'] },
  { y: 2006, t: 'Snow Day', 'm': 'Oil', w: 8, h: 10, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/Sy2B8EU67YI/AAAAAAAACsQ/_cpw07lQUcY/s320/200612SnowDay.jpg', g: ['landscape'] },
  { y: 2009, t: 'Red', 'm': 'Oil', w: 8, h: 10, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/Sy11Cxy8u4I/AAAAAAAACrw/lxnK6EqdOoc/s320/200910Red.jpg', g: ['landscape'] },
  { y: 2009, t: 'Clouds over Forbes Lake', 'm': 'Oil', w: 10, h: 8, u: 'https://1.bp.blogspot.com/_hHE21tS1Nog/Sy11CtsHueI/AAAAAAAACro/g09_wEaKXX0/s320/200910CloudsOverForbesLake.jpg', g: ['landscape'] },
  { y: 2007, t: 'Conversation at Juanita Beach', 'm': 'Oil', w: 14, h: 11, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/Sy11CIJCXGI/AAAAAAAACrg/nyzH4kd9hsQ/s320/200708ConversationAtJuanitaBeach.jpg', g: ['landscape'] },
  { y: 2006, t: 'Sunset over Kirkland Marina', 'm': 'Oil', w: 14, h: 11, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/Sy11B6EY0TI/AAAAAAAACrY/sqeGl-kUfRk/s320/20060912Sunset+Over+Kirkland+Marina.jpg', g: ['landscape'] },
  { y: 2010, t: 'Crashing Waves', 'm': 'Oil on canvas', w: 20, h: 16, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/TDS-RHFLdAI/AAAAAAAADKg/_qi4RPpxgIs/s320/201006BigSurWave.JPG', g: ['landscape'] },
  { y: 2010, t: 'On the Farm', 'm': 'Oil', w: 14, h: 11, u: 'https://1.bp.blogspot.com/_hHE21tS1Nog/TGcqv2nQCuI/AAAAAAAADSY/WDqkHmCglNk/s320/201007SunsetOnFarm_small.JPG', g: ['landscape'] },
  { y: 2010, t: 'Summer Garden', 'm': 'Oil on canvas', w: 11, h: 14, u: 'https://4.bp.blogspot.com/_hHE21tS1Nog/TGcqvuCYF4I/AAAAAAAADSQ/8qFzjR1_7hw/s320/201007SummerGarden_small.JPG', g: ['landscape'] },
  { y: 2009, t: 'Chasing Tide', 'm': 'Oil on canvas', w: 10, h: 8, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/SqZz1tvfy2I/AAAAAAAACeA/cZt9uzEbEqg/s320/20090904_ChasingTides_01.JPG', g: ['stilllife'] },
  { y: 2009, t: 'Chasing Tide II', 'm': 'Oil on canvas', w: 10, h: 8, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/Ssk6AmlRnTI/AAAAAAAACfY/jIwdIPUwK7o/s320/20090929_ChasingTide2_Unframed.JPG', g: ['stilllife'] },
  { y: 2009, t: 'The Trio', 'm': 'Oil', w: 11, h: 14, u: 'https://1.bp.blogspot.com/_hHE21tS1Nog/Sy2B7vDXx4I/AAAAAAAACsI/SZTLAqUsoYk/s320/200911TheTrio.jpg', g: ['stilllife'] },
  { y: 2009, t: 'Sugar, Please', 'm': 'Oil', w: 12, h: 9, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/SvkCqUvBmcI/AAAAAAAAChc/KNSsmEsmrIE/s320/Min+Zhong+-+Sugar+Please.jpg', g: ['stilllife'] },
  { y: 2012, t: 'Iris', 'm': 'Oil on panel', w: 14, h: 11, u: 'https://1.bp.blogspot.com/-1QTHLUnOye0/T2GAMlnfACI/AAAAAAAAGhM/x_mgRmdub_s/s320/20120310_Iris.jpg', g: ['people'] },
  { y: 2011, t: 'Wishing for Snow', 'm': 'Oil', w: 8, h: 10, u: 'https://1.bp.blogspot.com/-lVnoptqnSIg/Tecbr82wPNI/AAAAAAAADbM/CqsFioLkgOE/s320/201101_Hui_0.JPG', g: ['people'] },
  { y: 2010, t: 'In My Garden', 'm': 'Oil', w: 8, h: 10, u: 'https://4.bp.blogspot.com/_hHE21tS1Nog/TUZI0SZO1RI/AAAAAAAADWI/lRipLTzygos/s320/201012_Gladys_6.JPG', g: ['people'] },
  { y: 2010, t: 'The Curious Twos', 'm': 'Oil', w: 8, h: 10, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/S3zklTjr79I/AAAAAAAAC50/ymseQCCAMoU/s320/201001_TheCuriousTwos.jpg', g: ['people'] },
  { y: 2013, t: 'Clouds over Lake', 'm': 'Oil on canvas', w: 5, h: 5, u: 'https://3.bp.blogspot.com/-eA0tzIlOm9Q/UXIq5D-oofI/AAAAAAAALG4/iaeRMamrisc/s320/201303_CoolCloudsWholeSky5x5.JPG', g: ['miniature'] },
  { y: 2013, t: 'Clouds over Mountain', 'm': 'Oil on canvas', w: 5, h: 5, u: 'https://4.bp.blogspot.com/-DGxf37g4bMA/UXIq_NzVPAI/AAAAAAAALHA/XIvGwyGKlU8/s320/201302_CloudsOverMtn5x5.JPG', g: ['miniature'] },
  { y: 2013, t: 'Bird', 'm': 'Oil on canvas', w: 5, h: 5, u: 'https://2.bp.blogspot.com/-qKYi2-IvAbs/UXIrEMnzOTI/AAAAAAAALHI/ZBq6iA4Rasc/s320/20130417WhiteBirdInBlue5x5Edmonds.JPG', g: ['miniature'] },
  { y: 2013, t: 'Lanai Sailing', 'm': 'Oil on canvas', w: 6, h: 4, u: 'https://3.bp.blogspot.com/-qM14Rsc1A7I/UXIrIJdoIzI/AAAAAAAALHQ/ludUYNeWUdc/s320/20130417LanaiSail_6x4Edmonds.JPG', g: ['miniature'] },
  { y: 2011, t: 'Clouds over the Prarie', 'm': 'Oil', w: 7, h: 5, u: 'https://2.bp.blogspot.com/-y6SS6lyX_v8/TvgwkaVVXjI/AAAAAAAAFoY/ROO1feQlbj0/s320/201112_FieldClouds.JPG', g: ['miniature'] },
  { y: 2010, t: 'Ocean Melody I', 'm': 'Oil', w: 7, h: 5, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/S3zkk7EkmNI/AAAAAAAAC5s/xpbqui5ubTc/s320/201001_OceanMelodyI.jpg', g: ['miniature'] },
  { y: 2010, t: 'Ocean Melody II', 'm': 'Oil', w: 7, h: 5, u: 'https://1.bp.blogspot.com/_hHE21tS1Nog/S3zkkaAxd8I/AAAAAAAAC5k/Mm-zGeHntLI/s320/201001_OceanMelodyII.jpg', g: ['miniature'] },
  { y: 2010, t: 'Red Peppers', 'm': 'Oil', w: 7, h: 5, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/S7l_6uBZT6I/AAAAAAAAC-Y/-DkAP80lWD4/s320/201003RedPeppers_0.JPG', g: ['miniature'] },
  { y: 2009, t: 'Cherry Hearts', 'm': 'Oil', w: 5, h: 7, u: 'https://4.bp.blogspot.com/_hHE21tS1Nog/SvkDC8BBAGI/AAAAAAAACh8/HQx993BKoPg/s320/Min+Zhong+-+Cherry+Hearts.jpg', g: ['miniature'] },
  { y: 2009, t: 'Ruby Red', 'm': 'Oil', w: 7, h: 5, u: 'https://1.bp.blogspot.com/_hHE21tS1Nog/SvkDCoCLN9I/AAAAAAAACh0/xebmULkfmYQ/s320/Min+Zhong+-+Ruby+Red.jpg', g: ['miniature'] },
  { y: 2009, t: 'Spoonful', 'm': 'Oil', w: 7, h: 5, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/SvkCq5TH3TI/AAAAAAAAChs/1bLHdmJTBGI/s320/Min+Zhong+-+Spoonful.jpg', g: ['miniature'] },
  { y: 2009, t: 'Sunday Afternoon Siesta', 'm': 'Oil', w: 5, h: 7, u: 'https://4.bp.blogspot.com/_hHE21tS1Nog/SvkCqjRO8DI/AAAAAAAAChk/9I2fuwyK0Yk/s320/Min+Zhong+-+Sunday+Afternoon+Siesta.jpg', g: ['miniature'] },
  { y: 2009, t: 'Three Stooges', 'm': 'Oil', w: 8, h: 6, u: 'https://3.bp.blogspot.com/_hHE21tS1Nog/St1Pp4w42oI/AAAAAAAACgM/7-EBWBKLEnA/s320/20091018_3Stuges_00.JPG', g: ['miniature'] },
  { y: 2010, t: 'Silver Lining', 'm': 'Oil', w: 7, h: 5, u: 'https://2.bp.blogspot.com/_hHE21tS1Nog/TGcvQd8_o0I/AAAAAAAADS4/YD4wA0aYMlk/s320/201006SilverLining_small.jpg', g: ['miniature'] },
  { y: 2010, t: 'Silver Lining II', 'm': 'Oil', w: 7, h: 5, u: 'https://1.bp.blogspot.com/_hHE21tS1Nog/TGcuL5xwr_I/AAAAAAAADSo/cmWgPcMMLjU/s320/Silverlining2_small.jpg', g: ['miniature'] }
];

var setImage = function (i) {
  $('#carousel').carousel(i);
  $('html, body').animate({
    scrollTop: $('#carousel').offset().top
  }, 200);
};

/* Navbar smooth scroll and active state */
$('.navbar-nav a, .navbar-brand').on('click', function () {
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

  $.each(p, function (i, it) {
    /* If group is defined, ignore all images not in it */
    if (!!group && it.g.indexOf(group) === -1) {
      return;
    }

    var yearStr = (it.y ? ' (' + it.y + ')' : '');
    var line2 = (it.m ? it.m + ', ' : '') + it.w + '″×' + it.h + '″';

    /* Add the thumbnails */
    var tooltipHtml = '<i>' + it.t + '</i>' + yearStr + '<br/><small>' + line2 + '</small';
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
          .append($('<div/>').text(line2))));
  });
  /* Activate the first item. */
  $('#carousel .carousel-item:first').addClass('active');
};

addImages(p);

/* Install portfolio filter controls */
$('#portfolio-filter .btn').on('click', function () {
  $('#portfolio-filter').find('.text-primary').removeClass('text-primary');
  $(this).addClass('text-primary');

  const group = $(this).attr('group') || '';
  addImages(p, group);
});

/* Support swipe on carousel */
$('#carousel').swipe({
  swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');
  },
  allowPageScroll: 'vertical'
});

/* Activate tooltips on the thumbnails. */
$('.img-thumbnail').tooltip({ 'html': true, 'placement': 'auto' });
