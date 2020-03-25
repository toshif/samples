var MY_FAVORITES = [
    { 'station': 'FMT', 'hour': '0000', 'name': '---- Tokyo FM ----' },
    { 'station': 'FMT', 'hour': '0600', 'name': 'One Morning' },
    { 'station': 'FMT', 'hour': '0900', 'name': 'Blue Ocean' },
    { 'station': 'FMT', 'hour': '1130', 'name': 'Love Connection' },
    { 'station': 'FMT', 'hour': '1500', 'name': 'The Trad' },
    { 'station': 'FMT', 'hour': '0000', 'name': 'Jet Stream' },
    { 'station': 'FMT', 'hour': '0000', 'name': '---- J WAVE ----' },
    { 'station': 'FMJ', 'hour': '0600', 'name': 'J-WAVE Tokyo Morning Radio' },
    { 'station': 'FMJ', 'hour': '0900', 'name': 'Step One 1' },
    { 'station': 'FMJ', 'hour': '1000', 'name': 'Step One 2' },
    { 'station': 'FMJ', 'hour': '1300', 'name': 'Good neighbors 1' },
    { 'station': 'FMJ', 'hour': '1500', 'name': 'Good neighbors 2' },
];

$(document).ready(function () {
    var links = "";
    MY_FAVORITES.forEach(function (item, index) {
        var today = new Date();
        var today_str = '' + today.getUTCFullYear() + today.getUTCMonth() + today.getUTCDate();
        href = 'http://radiko.jp/#!/ts/' + item['station'] + '/' + today_str + item['hour'] + '00';
        links += '<li><a href="">' + item['station'] + ' ' + item['hour'] + ' ' + item['name'] + '</a></li>';
    });
    $("#my-links").html(links);
});
