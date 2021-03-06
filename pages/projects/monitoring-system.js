import Link from "next/link";

import ImageGallery from "react-image-gallery";
import BackButton from "../../components/BackButton";

const imageList = [1];

const images = imageList.map((i) => {
    return {
        original: `/images/projects/monitoring/${i}.png`,
        thumbnail: `/images/projects/monitoring/${i}.png`,
    };
});

export default function MonitoringSystem() {
    return (
        <>
            <BackButton />
            <div className="project-page">
                <div className="project-container">
                    <h1 className="content-title">Monitoring System</h1>
                    <div className="margin-vertical">
                        <ImageGallery items={images} showPlayButton={false} />
                    </div>
                    <h2>Context</h2>
                    <p>
                        The core service at Nuabee is their Disaster Recovery
                        Plan. This is a complex process which involves taking
                        backups of a company's infrastructure and in the case of
                        a disaster, replicating it in the cloud. This allows a
                        company to have complete confidence that they can
                        continue to provide their services in the case of an
                        emergency.
                    </p>
                    <h2>Problem</h2>
                    <p>
                        One of the problems we were having at Nuabee was the
                        lack of visibility when launching a Disaster Recovery
                        Plan. We were unable to see where errors were occurring
                        without going into the different virtual machines and
                        checking the logs manually. A great deal of time was
                        being spent tracking down bugs and it also made it
                        difficult to train new support staff members on how to
                        deal with these issues.
                    </p>
                    <h2>Solution</h2>
                    <p>
                        A solution to the problem was to have a dashboard which
                        would track each server in real-time. The monitoring
                        dashboard provides an overall view of each Disaster
                        Recovery Plan launched, the status of every machine, and
                        each of the machines hard-drives. This includes any
                        failures which may occur throughout the process.
                    </p>
                    <h2>Technologies</h2>
                    <p>
                        <span className="colored-text">Backend: </span>
                        Node.js, Express.js, Django
                    </p>
                    <p>
                        <span className="colored-text">Frontend: </span>
                        VueJS, Django
                    </p>
                    <p>
                        <span className="colored-text">Databases: </span>
                        MariaDB, MongoDB
                    </p>
                    <p>
                        <span className="colored-text">DevOps: </span>
                        Docker, Gitlab CI
                    </p>
                </div>
            </div>
        </>
    );
}
