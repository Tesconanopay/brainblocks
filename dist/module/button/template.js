
/* @jsx jsxDom */

import { jsxDom } from 'xcomponent/src/lib';

export function buttonTemplate(_ref) {
    var props = _ref.props;


    var currency = '';
    var amount = '';

    if (props.payment.currency === 'rai') {
        var hasRai = function hasRai(num) {
            num = parseInt(num) / 1000;
            return num > Math.floor(num);
        };

        amount = hasRai(props.payment.amount) ? (parseInt(props.payment.amount) / 1000000).toFixed(6) : (parseInt(props.payment.amount) / 1000000).toFixed(3);
    }
    return jsxDom(
        'div',
        { 'class': 'brainblocks-button-container' },
        jsxDom(
            'style',
            null,
            '\n                    .brainblocks-button {\n                        display: inline-block;\n                        width: 100%;\n                        height: 50px;\n                        background-color: #eee;\n                        border-radius: 20px;\n                        font-family: Helvetica, Arial, sans-serif;\n                        line-height: 50px;\n                        color: #1A3238;\n                        cursor: pointer;\n                        font-size: 16px;\n                        text-align: center;\n                        letter-spacing: 1px;\n                    }\n                    \n                    .brainblocks-button-content {\n                        width: 100%;\n                        height: 50px;\n                        display: flex;\n                        flex-direction: row;\n                        justify-content: center;\n                        align-items: center;\n                    }\n\n                    .brainblocks-button .nano-logo {\n                        height: 20px;\n                        float: left;\n                        padding-right: 15px;\n                        border-right: 2px solid #ccc;\n                    }\n\n                    .brainblocks-button .pay-text {\n                        margin-left: 15px;\n                    }\n\n                    .brainblocks-button .pay-amount {\n                        font-weight: bold;\n                    }\n\n                    .brainblocks-button .pay-currency {\n                        font-weight: bold;\n                    }\n\n                    @media screen and (max-width: 299px) {\n                        .brainblocks-button .pay-text {\n                            display: none;\n                        }\n                    }\n\n                    @media screen and (max-width: 200px) {\n                        .brainblocks-button .brainblocks-raiblocks-logo {\n                            display: none;\n                        }\n\n                        .brainblocks-button .brainblocks-raiblocks-logo-small {\n                            display: inline-block;\n                        }\n                    }\n                '
        ),
        jsxDom(
            'div',
            { role: 'button', 'class': 'brainblocks-button' },
            jsxDom(
                'div',
                { 'class': 'brainblocks-button-content' },
                jsxDom('img', { 'class': 'nano-logo', src: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCA2NyAyOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPHN0eWxlPi5zdDB7ZmlsbDojNGE5MGUyfS5zdDF7ZmlsbDojMDAwMDM0fTwvc3R5bGU+DQogIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjQuOCIgY3k9IjI0LjQiIHI9IjQuOCIvPg0KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjIgLjZjLTIuNiAwLTQuOCAyLjEtNC44IDQuOCAwIDMuOC0uNiA0LjgtNC44IDQuOEg1MmMtMi40LjItNC4zIDIuMi00LjMgNC43di4xYzAgMy43LS43IDQuNi00LjggNC42LS4yIDAtLjQgMC0uNS4xLTIuNC4zLTQuMyAyLjMtNC4zIDQuNyAwIDIuNiAyLjEgNC44IDQuOCA0LjggMi41IDAgNC42LTIgNC43LTQuNHYtLjRjMC0zLjQgMS4xLTQuNyA0LjctNC44aC4xYzIuNSAwIDQuNi0yIDQuNy00LjV2LS4zYzAtMy41IDEuMS00LjggNC44LTQuOCAyLjYgMCA0LjgtMi4xIDQuOC00LjggMC0yLjUtMi4xLTQuNi00LjctNC42ek0zMy44IDEwLjJoLS40Yy00LjIgMC00LjgtMS00LjgtNC44IDAtMi42LTIuMS00LjgtNC44LTQuOEMyMS4yLjYgMTkgMi43IDE5IDUuNGMwIDMuOC0uNiA0LjctNC44IDQuN2gtLjRjLTIuNC4yLTQuMyAyLjItNC4zIDQuNyAwIDIuNiAyLjEgNC44IDQuOCA0LjggMi41IDAgNC42LTIgNC43LTQuNHYtLjNjMC0zLjUgMS4xLTQuOCA0LjgtNC44IDMuNyAwIDQuOCAxLjMgNC44IDQuNyAwIDIuNiAyLjEgNC44IDQuOCA0LjhzNC44LTIuMSA0LjgtNC44Yy0uMS0yLjQtMi00LjQtNC40LTQuNnoiLz4NCjwvc3ZnPg==' }),
                jsxDom(
                    'span',
                    null,
                    jsxDom(
                        'span',
                        { 'class': 'pay-text' },
                        amount && 'Pay '
                    ),
                    jsxDom(
                        'span',
                        null,
                        jsxDom(
                            'span',
                            { id: 'pay-amount', 'class': 'pay-amount' },
                            amount || jsxDom('img', { 'class': 'loading-spinner', src: 'data:image/svg+xml;base64,PHN2ZyB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHdpZHRoPSIyNXB4IiBoZWlnaHQ9IjI1cHgiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCBkPSJNNzguNzUgMTYuMThWMS41NmE2NC4xIDY0LjEgMCAwIDEgNDcuNyA0Ny43SDExMS44YTQ5Ljk4IDQ5Ljk4IDAgMCAwLTMzLjA3LTMzLjA4ek0xNi40MyA0OS4yNUgxLjhhNjQuMSA2NC4xIDAgMCAxIDQ3LjctNDcuN1YxNi4yYTQ5Ljk4IDQ5Ljk4IDAgMCAwLTMzLjA3IDMzLjA3em0zMy4wNyA2Mi4zMnYxNC42MkE2NC4xIDY0LjEgMCAwIDEgMS44IDc4LjVoMTQuNjNhNDkuOTggNDkuOTggMCAwIDAgMzMuMDcgMzMuMDd6bTYyLjMyLTMzLjA3aDE0LjYyYTY0LjEgNjQuMSAwIDAgMS00Ny43IDQ3Ljd2LTE0LjYzYTQ5Ljk4IDQ5Ljk4IDAgMCAwIDMzLjA4LTMzLjA3eiIgZmlsbD0iIzgxY2RmMSIgZmlsbC1vcGFjaXR5PSIxIi8+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209Ii05MCA2NCA2NCIgdG89IjAgNjQgNjQiIGR1cj0iNDAwbXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9nPjwvc3ZnPg==' })
                        ),
                        jsxDom(
                            'span',
                            null,
                            ' '
                        ),
                        jsxDom(
                            'span',
                            { id: 'pay-currency', 'class': 'pay-currency' },
                            'NANO'
                        )
                    )
                )
            )
        )
    );
}