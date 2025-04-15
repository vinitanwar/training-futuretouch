import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const CurriculumAccordion = ({ curriculum }) => {
  const [activeLesson, setActiveLesson] = useState(0);
  const [expandedTopic, setExpandedTopic] = useState(null);

  // Toggle lesson accordion
  const toggleLesson = (index) => {
    setActiveLesson(activeLesson === index ? null : index);
  };

  // Toggle topic details
  const toggleTopic = (lessonIndex, topicIndex) => {
    const key = `${lessonIndex}-${topicIndex}`;
    setExpandedTopic(expandedTopic === key ? null : key);
  };

  return (
    <div className="w-full  mx-auto">
      {curriculum?.map((lesson, lessonIndex) => (
        <div key={lessonIndex} className="border rounded-md mb-3">
          {/* Lesson Title */}
          <div
            className="p-4 cursor-pointer flex justify-between items-center bg-gray-200"
            onClick={() => toggleLesson(lessonIndex)}
          >
            <h4 className="text-lg font-semibold"> {lessonIndex + 1}.  {""}  {lesson.lesson}</h4>
            <span
              className={`transform transition-transform ${activeLesson === lessonIndex ? "rotate-180" : ""
                }`}
            >
              < FaAngleDown />
            </span>
          </div>

          {/* Lesson Topics */}
          {activeLesson === lessonIndex && (
            <div className="p-4 space-y-3 bg-white">
              {lesson.members.map((topic, topicIndex) => (
                <div key={topicIndex} className="px-3 pb-2">
                  <div
                    className="flex justify-between gap-2  cursor-pointer"
                    onClick={() => toggleTopic(lessonIndex, topicIndex)}
                  >
                    <span className="flex items-start w-full  space-x-2">
                      <FaFileAlt className="w-[10%] mt-2" />
                      <span className="font-medium  text-justify">{topic.topic}</span>
                    </span>
                    <span
                      className={`w-[10%] transform transition-transform ${expandedTopic === `${lessonIndex}-${topicIndex}`
                        ? "rotate-180"
                        : ""
                        }`}
                    >
                      < FaAngleDown className="mt-2"/>
                    </span>
                  </div>

                  {expandedTopic === `${lessonIndex}-${topicIndex}` && (
                    <div
                      className="p-4 mt-2 bg-gray-100 text-sm"
                      dangerouslySetInnerHTML={{ __html: topic.about_topic }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CurriculumAccordion;
