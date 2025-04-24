document.getElementById("header").innerHTML = fetch('header.html').then(res => res.text()).then(data => {
    document.getElementById("header").innerHTML = data;
  });

  document.getElementById("footer").innerHTML = fetch('footer.html').then(res => res.text()).then(data => {
    document.getElementById("footer").innerHTML = data;
  });