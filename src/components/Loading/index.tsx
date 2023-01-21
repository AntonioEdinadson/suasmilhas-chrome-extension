import loadingIcon from '../../assets/airplane.svg';

const Loading = () => {
    return (
        <div className="absolute w-full h-full flex justify-center items-center bg-white/[.6] z-50">
            <img src={loadingIcon} alt="loadinfIcon" className="w-[12rem] animate-bounce" />
        </div>
    );
}

export default Loading;