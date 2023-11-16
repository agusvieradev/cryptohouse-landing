export const sendMail = async (name, email) => {
  const host = process.env.APP_SERVER_HOST;
  try {
    const response = await fetch(host, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
      }),
    });

    if (response.ok) {
      console.log("Solicitud POST exitosa");
      name.value = "";
      email.value = "";
    } else {
      console.error("Error en la solicitud POST:", response.statusText);
    }
  } catch (error) {
    console.error("Error en la solicitud POST:", error.message);
  }
};
