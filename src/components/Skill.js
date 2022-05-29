import React from "react";
import PropTypes from "prop-types";

function Skill({ badgeData, badge, currentSkill, setCurrentSkill }) {
    const handleClick = () => {
        if (badgeData?.id !== currentSkill?.id) {
            setCurrentSkill(badgeData);
        } else {
            setCurrentSkill(null);
        };
    };
    return (
        <div
            onClick={() => handleClick()}
            className="flex justify-center items-center p-2 aspect-square rounded-md cursor-pointer select-none transition-colors"
            style={{
                backgroundColor: badgeData?.id === currentSkill?.id ? "#45474a" : "transparent"
            }}
        >
            <div className="w-full h-full rounded-sm transition-colors" style={{
                backgroundColor: badgeData?.id === currentSkill?.id ? badgeData?.color : "#45474a", 
                WebkitMaskImage: badge,
                maskImage: badge, 
                WebkitMaskRepeat: "no-repeat", 
                maskRepeat: "no-repeat"
            }} />
        </div>
    );
};

Skill.propTypes = {
    badge: PropTypes.string.isRequired, 
    badgeData: PropTypes.object.isRequired, 
    setCurrentSkill: PropTypes.func.isRequired, 
    currentSkill: PropTypes.any
};

export default Skill;