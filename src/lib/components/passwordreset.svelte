<script>
    import { goto } from '$app/navigation';
  
    function navigateToLogin() {
     goto("/login")
    }
  </script>
  
  <p class="info-text">
    If we find an eligible account associated with that address, we will send an email to the address containing further instructions to recover your password.
  </p>
  
  <button on:click={navigateToLogin} class="login-button">Go to Login</button>
  
  <style>
    .info-text {
      font-size: 16px; /* Example font size */
      color: hsl(0, 13%, 89%); /* Dark grey text color for readability */
      max-width: 600px; /* Maximum width for better readability */
      margin: 20px auto; /* Center the text block with some margin */
      line-height: 1.5; /* Improve readability with increased line height */
    }
  
    .login-button {
      display: block;
      width: 200px;
      padding: 10px;
      margin: 20px auto; /* Center the button */
      background-color: #007bff; /* Example button color */
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .login-button:hover {
      background-color: #0056b3; /* Darker shade on hover */
    }
  </style>