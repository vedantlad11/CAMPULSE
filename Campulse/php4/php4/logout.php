<?php
session_start();
session_unset();
session_destroy();
header("Location: student-login.html?logged_out=1");
exit();
?>