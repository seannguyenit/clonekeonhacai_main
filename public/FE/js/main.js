


document.addEventListener("DOMContentLoaded", function () {
  // var openFilterButton = document.getElementById("open_filter");
  // if (openFilterButton) {
  //   openFilterButton.addEventListener("click", function () {
  //     var popup = document.getElementById("filter_options");
  //     let cr = popup.style.display;
  //     if (cr === "block") {
  //       popup.style.display = "none";
  //     } else {
  //       popup.style.display = "block";
  //     }
  //   });
  // }
  const toggleBtn = document.querySelector('#toggle-btn');
  const content = document.querySelector('#mobile-menu');
  toggleBtn.addEventListener('click', function() {
    const icon = toggleBtn.querySelector('i');
    if (icon.classList.contains('fa-bars')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      content.style.display = 'block';
      content.style.animation = 'slide-down 0.5s ease-out';
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      content.style.display = 'none';
    }
  });
  var selectDateElement = document.getElementById("date_select");
  if (selectDateElement) {

    let hr = this.location.href.endsWith('/') ? this.location.href.slice(0, this.location.href.length - 1) : this.location.href


    let cr_path = hr;
    let arr_ = cr_path.split('/')
    let cr_date = arr_.slice(-1)[0];
    const dateString = cr_date;
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) {
      let cr = selectDateElement.children[0];
      if (!cr.classList.contains('active')) {
        cr.classList.add('active');
      }
      Array.from(selectDateElement.children).forEach(ele => {
        ele.addEventListener('click', () => {
          this.location.href = cr_path + '/' + ele.children[0].dataset.date
        })
      })
    } else {
      let cr = Array.from(selectDateElement.children).find(f => f.children[0].dataset.date === cr_date);
      if (!cr.classList.contains('active')) {
        cr.classList.add('active');
      }
      Array.from(selectDateElement.children).forEach(ele => {
        ele.addEventListener('click', () => {
          this.location.href = cr_path.replace(cr_date, ele.children[0].dataset.date)
        })
      })
    }
  }
});
