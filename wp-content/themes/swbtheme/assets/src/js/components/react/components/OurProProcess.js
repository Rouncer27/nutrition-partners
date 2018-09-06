import React from "react";

const OurProProcess = props => {
  const ourProcessTitleEn = props.acf._np_our_process_title_en;
  const ourProcessTitleFr = props.acf._np_our_process_title_fr;
  const ourProcessTitle =
    props.browserLang === "en" ? ourProcessTitleEn : ourProcessTitleFr;

  const ourProcessIntroEn = props.acf._np_our_process_intro_en;
  const ourProcessIntroFr = props.acf._np_our_process_intro_fr;
  const ourProcessIntro =
    props.browserLang === "en" ? ourProcessIntroEn : ourProcessIntroFr;

  const ourStepsEn = props.acf._np_steps_en;
  const ourStepsFr = props.acf._np_steps_fr;
  const ourSteps = props.browserLang === "en" ? ourStepsEn : ourStepsFr;

  return (
    <div className="np-ourpro">
      <div className="np-ourpro__wrapper">
        <div className="np-ourpro__intro">
          <div className="np-ourpro__intro--title">
            <h2>{ourProcessTitle}</h2>
          </div>
          <div
            className="np-ourpro__intro--paragraph"
            dangerouslySetInnerHTML={{ __html: ourProcessIntro }}
          />
        </div>
        <div className="np-ourpro__steps">
          {ourSteps.map((step, index) => {
            const contentRequired = step.content_req === "yes" ? true : false;
            const contentType = contentRequired ? step.content_type : false;

            const stepIcon = step.icon;
            const stepTitle = step.title;

            return (
              <div key={index} className="np-ourpro__step">
                <div
                  className={`np-ourpro__step--icon np-ourpro__step--${stepIcon}`}
                >
                  <i />
                </div>
                <div className="np-ourpro__step--title">
                  <h3>{stepTitle}</h3>
                </div>

                {contentRequired &&
                  contentType === "paragraph" && (
                    <div
                      className="np-ourpro__step--content"
                      dangerouslySetInnerHTML={{ __html: step.content }}
                    />
                  )}

                {contentRequired &&
                  contentType === "list" && (
                    <ul className="np-ourpro__step--list">
                      {step.list_items.map((item, index) => {
                        return <li key={index}>{item.list_item}</li>;
                      })}
                    </ul>
                  )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurProProcess;
