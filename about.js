function showShannonAbout() {
    $("#ShannonAbout").removeClass("hide");
    $("#Brian").addClass("hide");
    $("#Cliff").addClass("hide");
    $("#Mohammad").addClass("hide");
    $("#ShannonPic").removeClass("col s4");
    $("#ShannonPic").addClass("col s12");
    $("button").removeClass("hide");
    $("h2").addClass("hide");
    $("#ShannonGithub").removeClass("hide")
  }
  
  function showBrianAbout() {
    $("#BrianAbout").removeClass("hide");
    $("#Shan").addClass("hide");
    $("#Cliff").addClass("hide");
    $("#Mohammad").addClass("hide");
    $("#BrianPic").removeClass("col s4");
    $("#BrianPic").addClass("col s12");
    $("button").removeClass("hide");
    $("h2").addClass("hide");
    $("#BrianGithub").removeClass("hide")
  }
  
  function showCliffAbout() {
    $("#CliffAbout").removeClass("hide");
    $("#Shan").addClass("hide");
    $("#Kyle").addClass("hide");
    $("#Mohammad").addClass("hide");
    $("#CliffPic").removeClass("col s4");
    $("#CliffPic").addClass("col s12");
    $("button").removeClass("hide");
    $("h2").addClass("hide");
    $("#CliffGithub").removeClass("hide")
  }

  function showMohammadAbout() {
    $("#MohammadAbout").removeClass("hide");
    $("#Shan").addClass("hide");
    $("#Brian").addClass("hide");
    $("#Cliff").addClass("hide");
    $("#MohammadPic").removeClass("col s4");
    $("#MohammadPic").addClass("col s12");
    $("button").removeClass("hide");
    $("h2").addClass("hide");
    $("#MohammadGithub").removeClass("hide")
  }
  
  function GangsAllHere() {
    $("#Shan").removeClass("hide");
    $("#Brian").removeClass("hide");
    $("#Cliff").removeClass("hide");
    $("#Mohammad").removeClass("hide");
  
    $("#ShannonPic").removeClass();
    $("#ShannonPic").addClass("col s4");
    $("#BrianPic").removeClass();
    $("#BrianPic").addClass("col s4");
    $("#CliffPic").removeClass();
    $("#CliffPic").addClass("col s4");
    $("#MohammadPic").removeClass();
    $("#MohammadPic").addClass("col s6");
  
    $("#ShannonAbout").addClass("hide");
    $("#BrianAbout").addClass("hide");
    $("#CliffAbout").addClass("hide");
    $("#MohammadAbout").addClass("hide");

    $("#ShannonGithub").addClass("hide")
    $("#BrianGithub").addClass("hide")
    $("#CliffGithub").addClass("hide")
    $("#MohammadGithub").addClass("hide")

  
    $("button").addClass("hide");
  
    $("h2").removeClass("hide");
  }
  
  $("#Shan").click(function () {
    showShannonAbout();
  });
  $("#Brian").click(function () {
    showBrianAbout();
  });
  $("#Cliff").click(function () {
    showCliffAbout();
  });
  $("#Mohammad").click(function () {
    showMohammadAbout();
  });
  $("button").click(function () {
    GangsAllHere();
  });