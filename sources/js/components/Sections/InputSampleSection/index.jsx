/**
 * @file index.jsx
 * @description Input sample section.
 */

'use strict';
import { FlexibleSection } from '../../Content/components/GridSection';
import Input from '../../Input';

import * as styles from './InputSampleSection.module.css';

/**
 * Input sample section.
 * @returns Returns the component.
 */
function InputSampleSection() {
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
                <h1>Default Inputs</h1>
                <Input
                    type="text"
                    placeholder="Primary"
                    inputStyle={{ width: '250px' }}
                />{' '}
                <br />
                <Input
                    type="text"
                    color="red"
                    placeholder="Red"
                    inputStyle={{ width: '250px' }}
                />{' '}
                <br />
                <Input
                    type="text"
                    color="orange"
                    placeholder="Orange"
                    inputStyle={{ width: '250px' }}
                />{' '}
                <br />
                <Input
                    type="text"
                    color="yellow"
                    placeholder="Yellow"
                    inputStyle={{ width: '250px' }}
                />{' '}
                <br />
                <Input
                    type="text"
                    color="green"
                    placeholder="Green"
                    inputStyle={{ width: '250px' }}
                />{' '}
                <br />
                <Input
                    type="text"
                    color="blue"
                    placeholder="Blue"
                    inputStyle={{ width: '250px' }}
                />{' '}
                <br />
                <Input
                    type="text"
                    color="purple"
                    placeholder="Purple"
                    inputStyle={{ width: '250px' }}
                />{' '}
                <h1 style={{ marginTop: '26px' }}>Disabled Input</h1>
                <Input
                    type="text"
                    placeholder="This input is disabled"
                    inputStyle={{ width: '250px' }}
                    disabled
                />{' '}
                <h1 style={{ marginTop: '26px' }}>Icon Input</h1>
                <Input
                    type="email"
                    icon={{
                        iconPosition: 'left',
                        iconClass: 'fa-solid fa-envelope',
                    }}
                    placeholder="Email"
                    inputStyle={{ width: '250px' }}
                />{' '}
                <Input
                    type="password"
                    icon={{
                        iconPosition: 'left',
                        iconClass: 'fa-solid fa-lock',
                    }}
                    placeholder="Password"
                    inputStyle={{ width: '250px' }}
                />
                <br />
                <Input
                    type="text"
                    icon={{
                        iconPosition: 'right',
                        iconClass: 'fa-solid fa-search',
                    }}
                    placeholder="Search"
                    inputStyle={{ width: '250px' }}
                />{' '}
                <Input
                    type="text"
                    icon={{
                        iconPosition: 'right',
                        iconClass: 'fa-solid fa-address-book',
                    }}
                    placeholder="Phone Number"
                    inputStyle={{ width: '250px' }}
                />
                <h1 style={{ marginTop: '26px' }}>Sized Input</h1>
                <Input
                    type="text"
                    size="small"
                    placeholder="Small"
                    inputStyle={{ width: '100px' }}
                />{' '}
                <Input
                    type="text"
                    placeholder="Default"
                    inputStyle={{ width: '100px' }}
                />{' '}
                <Input
                    type="text"
                    size="large"
                    placeholder="Large"
                    inputStyle={{ width: '100px' }}
                />
                <br />
                <Input
                    type="text"
                    size="small"
                    icon={{
                        iconPosition: 'right',
                        iconClass: 'fa-solid fa-info-circle',
                    }}
                    placeholder="Small"
                    inputStyle={{ width: '100px' }}
                />{' '}
                <Input
                    type="text"
                    icon={{
                        iconPosition: 'right',
                        iconClass: 'fa-solid fa-info-circle',
                    }}
                    placeholder="Default"
                    inputStyle={{ width: '100px' }}
                />{' '}
                <Input
                    type="text"
                    size="large"
                    icon={{
                        iconPosition: 'right',
                        iconClass: 'fa-solid fa-info-circle',
                    }}
                    placeholder="Large"
                    inputStyle={{ width: '100px' }}
                />
            </div>
        </FlexibleSection>
    );
}

export default InputSampleSection;
