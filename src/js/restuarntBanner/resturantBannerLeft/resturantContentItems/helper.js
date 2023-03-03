import { createDomElement } from "../../../helper";

export function contentItem({
    classId, displayText
}) {
    const elemenet = createDomElement({
        elementTag: "DIV",
        className: classId,
        innerHtml: displayText
    });
    return elemenet;
}