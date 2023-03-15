import React, { Fragment } from 'react';
import InfoBox from '../../components/info-box';
import { dataFields } from '../../config/data-fields-config';
import DataEntry from '../data-components/data-entry';
import NumericDataEntry from '../data-components/numeric-data-entry';

import withCopyEdit from '../data-container';

import { CategoryViewProps } from './category-view-props';

/**
* Streetscape view/edit section
*/
const StreetscapeView: React.FunctionComponent<CategoryViewProps> = (props) => (
    <Fragment>
        <InfoBox type='warning' msg="This is what we're planning to collect on the building's context" />
        <ul className="data-list">
            <li>Gardens</li>
            <li>Trees</li>
            <li>Green walls</li>
            <li>Green roof</li>
            <li>Proximity to parks and open greenspace</li>
            <li>Building shading</li>
        </ul>
        <NumericDataEntry
            title={dataFields.size_plot_area_total.title_en}
            slug="size_plot_area_total"
            mode='view'
            step={0.1}
            min={0}
        />
        <NumericDataEntry
            title={dataFields.size_far_ratio.title_en}
            slug="size_far_ratio"
            mode='view'
            step={0.1}
            min={0}
        />
        <DataEntry
            title="Plot dimensions"
            slug=""
            value=""
            mode='view'
        />
        <DataEntry
            title="Plot geometry link"
            slug=""
            value=""
            mode='view'
        />
        <DataEntry
            title="Does the building have a garden?"
            slug=""
            value=""
            mode='view'
        />
        <DataEntry
            title="Street width"
            slug=""
            value=""
            mode='view'
        />
        <DataEntry
            title="Pavement width"
            slug=""
            value=""
            mode='view'
            />
        <DataEntry
            title="Street network geometry link"
            slug=""
            value=""
            mode='view'
        />
        <DataEntry
            title="Distance from Public Green Space"
            slug=""
            value=""
            mode='view'
        />
        <DataEntry
            title="Distance from front door to nearest tree"
            slug=""
            value=""
            mode='view'
        />
    </Fragment>
);
const StreetscapeContainer = withCopyEdit(StreetscapeView);

export default StreetscapeContainer;
