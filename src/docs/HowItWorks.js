import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function ExternalLink({ href, children }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            underline="hover"
            sx={{ fontWeight: 600 }}
        >
            {children}
        </Link>
    );
}

function HowItWorks() {
    return (
        <Box sx={{ fontSize: '20px', '& li': { mb: 0.5 } }}>
            <div dir="rtl" style={{ textAlign: 'right' }}>
                <h1>كيف يعمل الموقع؟</h1>
                <p>تتميز الكتابة العربية بصفتين أساسيتين:</p>
                <ol>
                    <li>تُكتب من اليمين إلى اليسار.</li>
                    <li>شكل الحروف يتغيّر حسب الحروف المحيطة بها.</li>
                </ol>
                <p>
                    لذلك عند محاولة عرض نص عربي داخل تطبيق أو مكتبة لا تدعم العربية، غالبًا ستظهر
                    الحروف بشكل منفصل هكذا: <b>ةي ب ر ع</b>
                </p>
                <p>
                    هذا المشروع يستخدم حزمة{' '}
                    <ExternalLink href="https://www.npmjs.com/package/arabic-persian-reshaper">arabic-persian-reshaper</ExternalLink>
                    {' '}التي تحتوي على المنطق الأساسي لإعادة تشكيل الحروف العربية (وهناك مكتبات مشابهة بلغات مختلفة مثل{' '}
                    <ExternalLink href="https://github.com/louy/Javascript-Arabic-Reshaper">Javascript-Arabic-Reshaper</ExternalLink>
                    {' '}و{' '}
                    <ExternalLink href="https://github.com/mpcabd/python-arabic-reshaper/">python-arabic-reshaper</ExternalLink>
                    ).
                </p>
                <p>
                    هذه الأدوات تحل مشكلة الحروف العربية المنفصلة التي قد تظهر عند استخدام خطوط مخصصة
                    على معظم المنصات (الويب، أندرويد، iOS...).
                </p>

                <p>مصادر إضافية:</p>
                <ul>
                    <li><ExternalLink href="https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AE%D8%B7_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A_%D9%81%D9%8A_%D9%8A%D9%88%D9%86%D9%8A%D9%83%D9%88%D8%AF">الخط العربي في يونيكود</ExternalLink></li>
                    <li><ExternalLink href="https://en.wikipedia.org/wiki/Complex_text_layout">تنسيق النصوص المركبة (Complex text layout)</ExternalLink></li>
                    <li><ExternalLink href="https://en.wikipedia.org/wiki/Arabic_script_in_Unicode">الكتابة العربية في Unicode</ExternalLink></li>
                    <li>
                        <ExternalLink href="http://www.alanwood.net/unicode/arabic_presentation_forms_b.html">Arabic Presentation Forms-B</ExternalLink>
                        <span> </span>(<ExternalLink href="http://www.unicode.org/charts/PDF/UFE70.pdf">PDF</ExternalLink>)
                        <span> </span>(<ExternalLink href="https://www.unicode.org/versions/Unicode13.0.0/ch09.pdf">معيار Unicode</ExternalLink>)
                    </li>
                    <li><ExternalLink href="http://www.unicode.org/charts/">جداول رموز Unicode</ExternalLink></li>
                    <li><ExternalLink href="https://github.com/mpcabd/python-arabic-reshaper">python-arabic-reshaper</ExternalLink></li>
                    <li><ExternalLink href="https://discourse.psychopy.org/t/reshaping-english-text-to-arabic/4235/5">مناقشة: إعادة تشكيل النص إلى العربية</ExternalLink></li>
                </ul>

                <p>مواقع مشابهة:</p>
                <ul>
                    <li><ExternalLink href="http://www.arabic-text.com/">Arabic Text</ExternalLink></li>
                    <li><ExternalLink href="https://reshaper.mpcabd.xyz/">Online Arabic Reshaper</ExternalLink></li>
                </ul>
            </div>

            <hr style={{ margin: '32px 0' }} />

            <div dir="ltr" style={{ textAlign: 'left' }}>
                <h1>How It Works?</h1>
                <p>Arabic script is very special with two essential features:</p>
                <ol>
                    <li>It is written from right to left.</li>
                    <li>The characters change shape according to their surrounding characters.</li>
                </ol>
                <p>
                    So when you try to print text written in Arabic script in an application or a library
                    that does not support Arabic, you are pretty likely to end up with something like this: <b>ةي ب ر ع</b>
                </p>
                <p>
                    I used <ExternalLink href="https://www.npmjs.com/package/arabic-persian-reshaper">arabic-persian-reshaper</ExternalLink> package
                    which contains the core logic (there are many others in different languages such as{' '}
                    <ExternalLink href="https://github.com/louy/Javascript-Arabic-Reshaper">Javascript-Arabic-Reshaper</ExternalLink>
                    {' '}and{' '}
                    <ExternalLink href="https://github.com/mpcabd/python-arabic-reshaper/">python-arabic-reshaper</ExternalLink>).
                </p>
                <p>
                    They basically solve the issue of disconnected Arabic letters which can appear while using
                    a custom font on most platforms (Web, Android, iOS, ...).
                </p>

                <p>Additional Resources:</p>
                <ul>
                    <li><ExternalLink href="https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AE%D8%B7_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A_%D9%81%D9%8A_%D9%8A%D9%88%D9%86%D9%8A%D9%83%D9%88%D8%AF">Arabic script in Unicode (Arabic)</ExternalLink></li>
                    <li><ExternalLink href="https://en.wikipedia.org/wiki/Complex_text_layout">Complex text layout</ExternalLink></li>
                    <li><ExternalLink href="https://en.wikipedia.org/wiki/Arabic_script_in_Unicode">Arabic script in Unicode</ExternalLink></li>
                    <li>
                        <ExternalLink href="http://www.alanwood.net/unicode/arabic_presentation_forms_b.html">Arabic Presentation Forms-B</ExternalLink>
                        <span> </span>(<ExternalLink href="http://www.unicode.org/charts/PDF/UFE70.pdf">PDF</ExternalLink>)
                        <span> </span>(<ExternalLink href="https://www.unicode.org/versions/Unicode13.0.0/ch09.pdf">The Unicode Standard</ExternalLink>)
                    </li>
                    <li><ExternalLink href="http://www.unicode.org/charts/">Unicode Character Code Charts</ExternalLink></li>
                    <li><ExternalLink href="https://github.com/mpcabd/python-arabic-reshaper">python-arabic-reshaper</ExternalLink></li>
                    <li><ExternalLink href="https://discourse.psychopy.org/t/reshaping-english-text-to-arabic/4235/5">Reshaping English Text to Arabic</ExternalLink></li>
                </ul>

                <p>Similar Websites:</p>
                <ul>
                    <li><ExternalLink href="http://www.arabic-text.com/">Arabic Text</ExternalLink></li>
                    <li><ExternalLink href="https://reshaper.mpcabd.xyz/">Online Arabic Reshaper</ExternalLink></li>
                </ul>
            </div>
        </Box>
    );
}

export default HowItWorks
