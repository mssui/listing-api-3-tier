import { useState, useCallback, type ReactElement } from "react";

type RandomNumberProps = {
    min: number;
    max: number;
};

export function SingleListing(props: any): any {

    props && props.map((item, i): any => <li key={i}> {item.toString()}</li>)

}