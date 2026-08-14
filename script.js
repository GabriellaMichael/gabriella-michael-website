const nav=document.getElementById('nav');const menu=document.getElementById('menu');const links=document.getElementById('links');window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>25));menu.onclick=()=>links.classList.toggle('open');document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>links.classList.remove('open'));const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const readerForm = document.getElementById("readerForm");

if (readerForm) {
  readerForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const button = document.getElementById("readerSubmit");
    const message = document.getElementById("readerMessage");

    button.disabled = true;
    button.textContent = "JOINING...";

    const formData = new FormData(readerForm);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData
        }
      );

      const result = await response.json();

      if (result.success) {
        readerForm.reset();
        button.style.display = "none";
        message.style.display = "block";
        message.textContent = "YOU'RE ON THE LIST ✨";
      } else {
        button.disabled = false;
        button.textContent = "JOIN THE READER LIST";
        message.style.display = "block";
        message.textContent = "Something went wrong. Please try again.";
      }
    } catch (error) {
      button.disabled = false;
      button.textContent = "JOIN THE READER LIST";
      message.style.display = "block";
      message.textContent = "Something went wrong. Please try again.";
    }
  });
}
