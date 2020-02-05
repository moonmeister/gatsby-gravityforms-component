import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import strings from '../../utils/strings'
import InputWrapper from '../InputWrapper'

const File = ({ errors, fieldData, name, register, ...wrapProps }) => {
    const {
        allowedExtensions,
        cssClass,
        isRequired,
        maxFiles,
        multipleFiles,
        placeholder,
        size,
        type,
    } = fieldData

    return (
        <InputWrapper
            errors={errors}
            inputData={fieldData}
            labelFor={name}
            {...wrapProps}
        >
            {multipleFiles ? (
                <div className="gform_fileupload_multifile">
                    <div className="gform_drop_area">
                        <span className="gform_drop_instructions">
                            Drop files here or
                        </span>
                        <button
                            aria-invalid={errors}
                            aria-required={isRequired}
                            className={classnames(
                                'gravityform__field__input',
                                `gravityform__field__input__${type}`,
                                cssClass,
                                'button',
                                'gform_button_select_files'
                            )}
                            id={name}
                            name={name}
                            placeholder={placeholder}
                            ref={register({
                                required: isRequired && strings.errors.required,
                            })}
                            type="button"
                        >
                            Select Files
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <input
                        name="MAX_FILE_SIZE"
                        type="hidden"
                        value={128000000} //128MB as hard, TODO: get this from API
                    />
                    <input
                        aria-invalid={errors}
                        aria-required={isRequired}
                        className={classnames(
                            'gravityform__field__input',
                            `gravityform__field__input__${type}`,
                            cssClass,
                            size
                        )}
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        ref={register({
                            required: isRequired && strings.errors.required,
                        })}
                        type="file"
                    />
                </>
            )}
        </InputWrapper>
    )
}

export default File

File.propTypes = {
    errors: PropTypes.object,
    fieldData: PropTypes.shape({
        cssClass: PropTypes.string,
        inputMaskValue: PropTypes.string,
        isRequired: PropTypes.bool,
        multipleFiles: PropTypes.bool,
        placeholder: PropTypes.string,
        size: PropTypes.string,
        type: PropTypes.string,
    }),
    name: PropTypes.string,
    register: PropTypes.func,
    value: PropTypes.string,
    wrapProps: PropTypes.object,
}
