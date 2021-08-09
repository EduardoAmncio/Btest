import React from "react";

import "./TagsExtract.scss"

interface TagsExtractProps {
    tag: string;
}

export const TagsExtract: React.FC<TagsExtractProps> = ({ tag }: TagsExtractProps) => {

    return (
        <div className="detailInfo-tags">
            <div> Suas TAGs </div>
            <strong> {tag} </strong>
        </div>

    );

};