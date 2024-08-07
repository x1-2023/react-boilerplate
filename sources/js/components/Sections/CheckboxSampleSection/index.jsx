/**
 * @file index.jsx
 * @description Checkbox sample section.
 */

'use strict';
import { FlexibleSection } from '../../Content/components/GridSection';
import Checkbox from '../../Checkbox';

import * as styles from './CheckboxSampleSection.module.css';

/**
 * Checkbox sample section.
 * @returns Returns the component.
 */
function CheckboxSampleSection() {
    return (
        <FlexibleSection
            style={{
                display: 'flex',
                flexFlow: 'columm nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px 20px',
                textAlign: 'center',
            }}
        >
            <div className={styles['content']}>
                <h1>Default Checkboxes</h1>
                <Checkbox labelText="Primary" id="cb-1" />{' '}
                <Checkbox labelText="Red" color="red" id="cb-2" />{' '}
                <Checkbox labelText="Orange" color="orange" id="cb-3" />{' '}
                <Checkbox labelText="Yellow" color="yellow" id="cb-4" />{' '}
                <Checkbox labelText="Green" color="green" id="cb-5" />{' '}
                <Checkbox labelText="Blue" color="blue" id="cb-6" />{' '}
                <Checkbox labelText="Purple" color="purple" id="cb-7" />
                <h1 style={{ marginTop: '26px' }}>Alternative Checkboxes 1</h1>
                <Checkbox
                    labelText="Primary"
                    id="cba-1"
                    altStyle="alt-1"
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="cba-2"
                    altStyle="alt-1"
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="cba-3"
                    altStyle="alt-1"
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="cba-4"
                    altStyle="alt-1"
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="cba-5"
                    altStyle="alt-1"
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="cba-6"
                    altStyle="alt-1"
                />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="cba-7"
                    altStyle="alt-1"
                />
                <h1 style={{ marginTop: '26px' }}>Alternative Checkboxes 2</h1>
                <Checkbox
                    labelText="Primary"
                    id="cba2-1"
                    altStyle="alt-2"
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="cba2-2"
                    altStyle="alt-2"
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="cba2-3"
                    altStyle="alt-2"
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="cba2-4"
                    altStyle="alt-2"
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="cba2-5"
                    altStyle="alt-2"
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="cba2-6"
                    altStyle="alt-2"
                />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="cba2-7"
                    altStyle="alt-2"
                />
                <h1 style={{ marginTop: '26px' }}>White-Only Checkboxes</h1>
                <Checkbox labelText="Primary" id="wcb-1" whiteOnly />{' '}
                <Checkbox labelText="Red" color="red" id="wcb-2" whiteOnly />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="wcb-3"
                    whiteOnly
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="wcb-4"
                    whiteOnly
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="wcb-5"
                    whiteOnly
                />{' '}
                <Checkbox labelText="Blue" color="blue" id="wcb-6" whiteOnly />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="wcb-7"
                    whiteOnly
                />
                <h1 style={{ marginTop: '26px' }}>Disabled Checkboxes</h1>
                <Checkbox labelText="Primary" id="dcb-1" disabled />{' '}
                <Checkbox labelText="Red" color="red" id="dcb-2" disabled />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="dcb-3"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="dcb-4"
                    disabled
                />{' '}
                <Checkbox labelText="Green" color="green" id="dcb-5" disabled />{' '}
                <Checkbox labelText="Blue" color="blue" id="dcb-6" disabled />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="dcb-7"
                    disabled
                />
                <br />
                <Checkbox
                    labelText="Primary"
                    id="dcba-1"
                    altStyle="alt-1"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="dcba-2"
                    altStyle="alt-1"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="dcba-3"
                    altStyle="alt-1"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="dcba-4"
                    altStyle="alt-1"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="dcba-5"
                    altStyle="alt-1"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="dcba-6"
                    altStyle="alt-1"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="dcba-7"
                    altStyle="alt-1"
                    disabled
                />
                <br />
                <Checkbox
                    labelText="Primary"
                    id="dcba2-1"
                    altStyle="alt-2"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="dcba2-2"
                    altStyle="alt-2"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="dcba2-3"
                    altStyle="alt-2"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="dcba2-4"
                    altStyle="alt-2"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="dcba2-5"
                    altStyle="alt-2"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="dcba2-6"
                    altStyle="alt-2"
                    disabled
                />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="dcba2-7"
                    altStyle="alt-2"
                    disabled
                />
                <br />
                <Checkbox
                    labelText="Primary"
                    id="dwcb-1"
                    whiteOnly
                    disabled
                />{' '}
                <Checkbox
                    labelText="Red"
                    color="red"
                    id="dwcb-2"
                    whiteOnly
                    disabled
                />{' '}
                <Checkbox
                    labelText="Orange"
                    color="orange"
                    id="dwcb-3"
                    whiteOnly
                    disabled
                />{' '}
                <Checkbox
                    labelText="Yellow"
                    color="yellow"
                    id="dwcb-4"
                    whiteOnly
                    disabled
                />{' '}
                <Checkbox
                    labelText="Green"
                    color="green"
                    id="dwcb-5"
                    whiteOnly
                    disabled
                />{' '}
                <Checkbox
                    labelText="Blue"
                    color="blue"
                    id="dwcb-6"
                    whiteOnly
                    disabled
                />{' '}
                <Checkbox
                    labelText="Purple"
                    color="purple"
                    id="dwcb-7"
                    whiteOnly
                    disabled
                />
                <h1 style={{ marginTop: '26px' }}>Sized Checkboxes</h1>
                <Checkbox labelText="Small" size="small" id="scb-small" />
                <Checkbox labelText="Default" id="scb-default" />
                <Checkbox labelText="Large" size="large" id="scb-large" />
            </div>
        </FlexibleSection>
    );
}

export default CheckboxSampleSection;
