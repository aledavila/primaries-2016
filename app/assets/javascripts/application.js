// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require angular/angular
//= require Chart
//= require semantic-ui
//= require raphael
//= require_tree .

$(function(){
  var cruzArray = [];
  var rubioArray = [];
  var trumpArray = [];
  var clintonArray = [];
  var sandersArray = [];

  $('.Cruz').each(function(){
    cruzArray.push($(this).text());
  });

  $('.Rubio').each(function(){
    rubioArray.push($(this).text());
  });

  $('.Trump').each(function(){
    trumpArray.push($(this).text());
  });

  $('.Clinton').each(function(){
    clintonArray.push($(this).text());
  });

  $('.Sanders').each(function(){
    sandersArray.push($(this).text());
  });

  $('#trumpbtn').on('click', function() {
    $('#map').hide();
    $('#description').hide();
    $('#questions').hide();
    $('#canvas_container').show();
    $('#candidate').show();
    $('#candidate').text('Trump\'s Nationwide Poll Estimates');
    drawChart(generateTrumpChart());
  });

  $('#cruzbtn').on('click', function() {
    $('#map').hide();
    $('#description').hide();
    $('#questions').hide();
    $('#canvas_container').show();
    $('#candidate').show();
    $('#candidate').text('Cruz\'s Nationwide Poll Estimates');
    drawChart(generateCruzChart());
  });

  $('#rubiobtn').on('click', function() {
    $('#map').hide();
    $('#description').hide();
    $('#questions').hide();
    $('#canvas_container').show();
    $('#candidate').show();
    $('#candidate').text('Rubio\'s Nationwide Poll Estimates');
    drawChart(generateRubioChart());
  });

  $('#clintonbtn').on('click', function() {
    $('#map').hide();
    $('#description').hide();
    $('#questions').hide();
    $('#canvas_container').show();
    $('#candidate').show();
    $('#candidate').text('Clinton\'s Nationwide Poll Estimates');
    drawChart(generateClintonChart());
  });

  $('#sandersbtn').on('click', function() {
    $('#map').hide();
    $('#description').hide();
    $('#questions').hide();
    $('#canvas_container').show();
    $('#candidate').show();
    $('#candidate').text('Bernie\'s Nationwide Poll Estimates');
    drawChart(generateSandersChart());
  });

  $('#mapbtn').on('click', function() {
    $('#map').show();
    $('#questions').show();
    $('#description').show();
    $('#candidate').hide();
    $('#canvas_container').hide();
  });


  var canvas = '<canvas id="chart" width="1000" height="400"></canvas>'

  var drawChart = function(data) {
    $('#canvas_container').html(canvas);

    var ctx = document.getElementById("chart").getContext("2d");
        window.myBar = new Chart(ctx).Bar(data, {
            responsive : true
    });
  };

  var generateTrumpChart = function () { return {
      labels: ["National", "Iowa", "Utah", "New Hampshire", "S. Carolina", "Florida", "N. Carlona", "Ohio", "California", "Kentuky", "Texas", "Louisiana", "Pennsylvania", "New Jersey", "Georgia", "Colorado", "Nevada", "Alabama", "Arkansas", "Massachusetts", "Oklahoma", "Virginia", "Michigan", "Illinois", "Arizona", "Alaska", "Wisconsin", "New York"],
      datasets: [
          {
              label: "Trump",
              fillColor: "rgba(220,0,0,0.5)",
              strokeColor: "rgba(225,0,20,0.8)",
              highlightFill: "rgba(225,0,20,0.75)",
              highlightStroke: "rgba(225,0,20,1)",
              data: trumpArray
          }
      ]
    };
  };

  var generateCruzChart = function () { return {
      labels: ["National", "Iowa", "Utah", "New Hampshire", "S. Carolina", "Florida", "N. Carlona", "Ohio", "California", "Kentuky", "Texas", "Louisiana", "Pennsylvania", "New Jersey", "Georgia", "Colorado", "Nevada", "Alabama", "Arkansas", "Massachusetts", "Oklahoma", "Virginia", "Michigan", "Illinois", "Arizona", "Alaska", "Wisconsin", "New York"],
      datasets: [
          {
              label: "Cruz",
              fillColor: "rgba(220,0,0,0.5)",
              strokeColor: "rgba(225,0,20,0.8)",
              highlightFill: "rgba(225,0,20,0.75)",
              highlightStroke: "rgba(225,0,20,1)",
              data: cruzArray
          }
      ]
    };
  };

  var generateRubioChart = function () { return {
      labels: ["National", "Iowa", "Utah", "New Hampshire", "S. Carolina", "Florida", "N. Carlona", "Ohio", "California", "Kentuky", "Texas", "Louisiana", "Pennsylvania", "New Jersey", "Georgia", "Colorado", "Nevada", "Alabama", "Arkansas", "Massachusetts", "Oklahoma", "Virginia", "Michigan", "Illinois", "Arizona", "Alaska", "Wisconsin", "New York"],
      datasets: [
          {
              label: "Rubio",
              fillColor: "rgba(220,0,0,0.5)",
              strokeColor: "rgba(225,0,20,0.8)",
              highlightFill: "rgba(225,0,20,0.75)",
              highlightStroke: "rgba(225,0,20,1)",
              data: rubioArray
          }
      ]
    };
  };

  var generateClintonChart = function () { return {
      labels: ["National", "Iowa", "New Hampshire", "S. Carolina", "Florida", "N. Carlona", "Ohio", "California", "Texas", "Pennsylvania", "New Jersey", "Georgia", "Nevada", "Massachusetts", "Oklahoma", "Virginia", "Michigan", "Wisconsin"],
      datasets: [
          {
              label: "CLinton",
              fillColor: "rgba(7,44,255,0.5)",
              strokeColor: "rgba(7,44,255,0.8)",
              highlightFill: "rgba(7,44,255,0.75)",
              highlightStroke: "rgba(7,44,255,1)",
              data: clintonArray
          }
      ]
    };
  };

  var generateSandersChart = function () { return {
      labels: ["National", "Iowa", "New Hampshire", "S. Carolina", "Florida", "N. Carlona", "Ohio", "California", "Texas", "Pennsylvania", "New Jersey", "Georgia", "Nevada", "Massachusetts", "Oklahoma", "Virginia", "Michigan", "Wisconsin"],
      datasets: [
          {
              label: "Sanders",
              fillColor: "rgba(7,44,255,0.5)",
              strokeColor: "rgba(7,44,255,0.8)",
              highlightFill: "rgba(7,44,255,0.75)",
              highlightStroke: "rgba(7,44,255,1)",
              data: sandersArray
          }
      ]
    };
  };

});


