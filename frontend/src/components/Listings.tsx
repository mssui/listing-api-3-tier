import { useState, useCallback, type ReactElement } from "react";
import { SingleListing } from "./ListingSingle";

type RandomNumberProps = {
    min: number;
    max: number;
};

export function Listings({ props }: any): any {
    console.log('Rendering Listings', props)

    return (
        <div>

            {props &&
                <pre style={{ background: '#f3f3f3', padding: 8, marginTop: 8 }}>{props.name ? props.name : 'A must to see'}</pre>

            }
            {props && <h2>{props.price}{props.currency}</h2>}
        </div>
    )

}