import React from 'react';
import { useEffect, useState, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import reshaper from 'arabic-persian-reshaper'

// TODO: Read more about Ref and how it works (https://stackoverflow.com/a/63559549/4488332)
const CopyToClipText = ({ text }) => {
    const myRef = useRef(null);
    const [data, setData] = useState(text);
    useEffect(() => setData(text), [text]);

    useEffect(() => {
        if (myRef.current && data) {
            myRef.current.select();
            document.execCommand('copy');
            setData(null);
        }
    }, [data, myRef.current]);

    return <div>{data && <textarea ref={myRef}>{data}</textarea>}</div>;
};

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AraForm() {
    const [originalText, setOriginalText] = useState('')
    const [reshapedText, setReshapedText] = useState('')

    const [copyText, setCopyText] = useState('')
    const [copySuccess, setCopySuccess] = useState(false)

    const [open, setOpen] = useState(false);

    const handleCopyClick = () => () => {
        setCopyText(reshapedText)
        setCopySuccess(true)
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleValueChange = () => {
        const transformedText = reshaper.ArabicShaper.convertArabic(originalText)
        // for some reason, transformedText doesn't show up properly on Davinci Resolve 17
        // so I neede to reverse the string
        setReshapedText([...transformedText].reverse().join(''))
    }

    useEffect(() => {
        // useEffect is needed sice setState is asynchronous: https://stackoverflow.com/a/65807556/4488332
        handleValueChange()
        originalText ? setCopySuccess(false) : setCopySuccess(true)
    }, [originalText])

    return (
        <React.Fragment>
            <CssBaseline />
            <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* <h2>النص الأصلي</h2> */}
                <TextField
                    id="outlined-multiline-static-original"
                    name="originalText"
                    margin="normal"
                    label="النص الأصلي"
                    placeholder="أدخل النص هنا"
                    multiline
                    rows={5}
                    fullWidth
                    variant="outlined"
                    onChange={e => setOriginalText(e.target.value)}
                    value={originalText}
                    autoFocus
                />
                <h2>
                    {reshapedText && <span>قم بنسخ النص أسفله</span>}
                </h2>
                <TextField
                    id="outlined-multiline-static-reshaped"
                    name="reshapedText"
                    margin="normal"
                    label="النص المعدل"
                    multiline
                    rows={5}
                    fullWidth
                    variant="outlined"
                    value={reshapedText}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Button
                                    startIcon={<FileCopyIcon />}
                                    onClick={handleCopyClick()}
                                    disabled={copySuccess}
                                >
                                    نسخ
                                </Button>
                            </InputAdornment>
                        )
                    }}
                />
                <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        تم نسخ النص بنجاح!
                    </Alert>
                </Snackbar>
            </Box>
            <CopyToClipText text={copyText} />
        </React.Fragment>
    );
}
