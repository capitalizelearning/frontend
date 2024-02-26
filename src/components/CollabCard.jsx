/* eslint-disable react/prop-types */
import CardFooter from './Section/CardFooter'

function CollabCardComponent({ image, data }) {
    return (
        <div className="flex flex-col">
            <div>
                <img src={image} />
            </div>
            <div className="mx-3 mt-2">
                <CardFooter
                    icon={data?.icon}
                    title={data?.title}
                    desc={data?.desc}
                    link={data?.link}
                />
            </div>
        </div>
    )
}

export default CollabCardComponent
