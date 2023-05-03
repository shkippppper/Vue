<template>
  <div>
    <h1>Terms of Use</h1>

    <p>
      Please read these Terms of Use ("Terms", "Terms of Use") carefully before
      using the Random Pokemon Generator website (the "Service") operated by us.
    </p>

    <h2>Accounts</h2>

    <p>
      When you create an account with us, you must provide accurate and complete
      information. You are solely responsible for the activity that occurs on
      your account, and you must keep your account password secure.
    </p>

    <h2>Intellectual Property</h2>

    <p>
      The Service and its original content, features, and functionality are and
      will remain the exclusive property of us and our licensors. The Service is
      protected by copyright, trademark, and other laws of both the United
      States and foreign countries. Our trademarks and trade dress may not be
      used in connection with any product or service without the prior written
      consent of us.
    </p>

    <h2>Termination</h2>

    <p>
      We may terminate or suspend your access to the Service immediately,
      without prior notice or liability, for any reason whatsoever, including
      without limitation if you breach the Terms. Upon termination, your right
      to use the Service will immediately cease.
    </p>

    <h2>Disclaimer</h2>

    <p>
      The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The
      Service is provided without warranties of any kind, whether express or
      implied, including, but not limited to, implied warranties of
      merchantability, fitness for a particular purpose, non-infringement, or
      course of performance.
    </p>

    <h2>Changes</h2>

    <p>
      We reserve the right, at our sole discretion, to modify or replace these
      Terms at any time. If a revision is material we will try to provide at
      least 30 days' notice prior to any new terms taking effect. What
      constitutes a material change will be determined at our sole discretion.
    </p>


  </div>
</template>

<script>
export default {
  // Vue component options
};
</script>
<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-top: 40px;
}

p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

a {
  color: #007aff;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }

  .container {
    padding: 20px;
  }
}
</style>
