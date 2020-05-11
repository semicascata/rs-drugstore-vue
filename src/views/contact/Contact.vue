<template>
<div class="contact">

  <div class="twContainer">
    <div class="twEffect">
      <h4 class="twText">Contact me.</h4>
    </div>
  </div>

  <div class="me">
    <h3>Raul O. Duarte</h3>
    <h4>
      <i class="fas fa-terminal"></i> <i>Aspiring Developer and IT Technician</i>
    </h4>

    <div class="cardMe">
      <i class="fas fa-envelope"></i> raulduarte94@hotmail.com <br />
      <i class="fas fa-phone"></i> +55 (41) 9 9700-2285 <br />
      <i class="fas fa-map-marker-alt"></i> Curitiba/PR - Brazil <br />
    </div>

    <p>
      <a type="button" href="https://github.com/semicascata" class="btn btn-floating btn-lg btn-git">
        <i class="fab fa-github"></i> GitHub
      </a>

      <a type="button" href="https://www.linkedin.com/in/raul-duarte-605378156/" class="btn btn-floating btn-lg btn-li">
        <i class="fab fa-linkedin"></i> Linkedin
      </a>
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang='scss' scoped>
.contact {
  width: 900px;
  margin: 20px auto 100px;
  text-align: center;
  color: #363636;
}

.me {
  margin-bottom: 130px;
  font-family: 'Bree Serif', serif;

  h4 {
    margin-top: 0;
    font-size: 1.2rem;
  }

  h3 {
    margin-bottom: 2px;
    font-size: 1.6rem;
  }
}

.cardMe {
  font-family: 'Bree Serif', serif;
  font-size: 1rem;
  text-align: center;
  margin: 18px auto 0;
  width: 221px;
}

p {
  margin: 2px auto 0;

  a {
    text-align: left;
  }
}
</style>
