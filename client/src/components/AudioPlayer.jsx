const AudioPlayer = ({ currentStation }) => {
  if (!currentStation) {
    return null;
  }

  const { isCompatible, isIframe, iframe, url, name } = currentStation;

  if (!isCompatible && !isIframe) {
    return <a href={url}>Click here to listen to {name}</a>;
  } else if (!isCompatible && isIframe) {
    return <div dangerouslySetInnerHTML={{ __html: iframe }} />;
  } else {
    return <audio className='w-full' controls src={url}></audio>;
  }
};

export default AudioPlayer;
