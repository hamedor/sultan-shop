const isBase64 = (image: string) => {
  
  if (image.startsWith("data:image")) {
    return <img src={image} alt="фото товара"></img>;
  } else {
    const pathToAssets = require.context("../assets/");
    return <img src={pathToAssets(`${image}`)} alt="фото товара"></img>;
  }
};

export default isBase64;
