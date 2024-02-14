export default function VideoActivity({ lessonData }) {
    return (
        <div className="w-full flex flex-col gap-6">
            <video controls>
                <source src={lessonData.content_uri} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam, repudiandae necessitatibus molestiae iusto, eum,
                aliquam voluptates et deserunt inventore sint praesentium iste?
                Ut, nobis possimus. Maiores delectus debitis sapiente
                cupiditate!
            </p>
        </div>
    );
}
