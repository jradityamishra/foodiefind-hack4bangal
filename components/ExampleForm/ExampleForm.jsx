const axios = require("axios");

export const getPublicUrl = async (formData) => {
  const response = await axios.request({
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.GOOGLE_CS_URL}/reel`,
    data: formData,
  });
  return response.data.result;
};

export default function ExampleForm() {
  async function myAction(formData) {
    "use server";
    const publicUrl = await getPublicUrl(formData);
    const name = formData.get("xyz");
    console.log(name);
    console.log(publicUrl);
  }

  return (
    <div>
      <form action={myAction}>
        <input type="text" name="xyz" /> //caption
        <input type="file" name="video" /> // video
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
