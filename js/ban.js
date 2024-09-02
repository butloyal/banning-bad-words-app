const textArea = document.querySelector('textarea.content');

        textArea.addEventListener('input', function() {
            let newText = '';
            newText = textArea.value;

            //EASTER EGG
            newText = newText.toLowerCase().replaceAll('hub', '<span class="hubbed banned">' + 'hub' + '</span>');

            //RUSSIAN CENSOR JS
            newText = newText.toLowerCase().replaceAll('пися', '<span class="banned">' + 'пися' + '</span>');
            newText = newText.toLowerCase().replaceAll('сука', '<span class="banned">' + 'сука' + '</span>');
            newText = newText.toLowerCase().replaceAll('бля', '<span class="banned">' + 'бля' + '</span>');
            newText = newText.toLowerCase().replaceAll('блч', '<span class="banned">' + 'блч' + '</span>');
            newText = newText.toLowerCase().replaceAll('пизда', '<span class="banned">' + 'пизда' + '</span>');
            newText = newText.toLowerCase().replaceAll('пидор', '<span class="banned">' + 'пидор' + '</span>');
            newText = newText.toLowerCase().replaceAll('еблан', '<span class="banned">' + 'еблан' + '</span>');
            newText = newText.toLowerCase().replaceAll('ебе', '<span class="banned">' + 'ебе' + '</span>');
            newText = newText.toLowerCase().replaceAll('еби', '<span class="banned">' + 'еби' + '</span>');
            newText = newText.toLowerCase().replaceAll('ёби', '<span class="banned">' + 'ёби' + '</span>');
            newText = newText.toLowerCase().replaceAll('еба', '<span class="banned">' + 'еба' + '</span>');
            newText = newText.toLowerCase().replaceAll('ёба', '<span class="banned">' + 'ёба' + '</span>');
            newText = newText.toLowerCase().replaceAll('негр', '<span class="banned">' + 'негр' + '</span>');
            newText = newText.toLowerCase().replaceAll('украин', '<span class="ukr">' + 'украин' + '</span>');

            //ENGLISH CENSOR JS
            newText = newText.toLowerCase().replaceAll('fuck', '<span class="banned">' + 'fuck' + '</span>');
            newText = newText.toLowerCase().replaceAll('feck', '<span class="banned">' + 'feck' + '</span>');
            newText = newText.toLowerCase().replaceAll('dick', '<span class="banned">' + 'dick' + '</span>');
            newText = newText.toLowerCase().replaceAll('nigg', '<span class="banned">' + 'nigg' + '</span>');
            newText = newText.toLowerCase().replaceAll('nige', '<span class="banned">' + 'nige' + '</span>');
            newText = newText.toLowerCase().replaceAll('sex', '<span class="banned">' + 'sex' + '</span>');
            newText = newText.toLowerCase().replaceAll('gay', '<span class="banned">' + 'gay' + '</span>');
            newText = newText.toLowerCase().replaceAll('mother', '<span class="banned">' + 'mother' + '</span>');
            newText = newText.toLowerCase().replaceAll('bitch', '<span class="banned">' + 'bitch' + '</span>');
            newText = newText.toLowerCase().replaceAll('arse', '<span class="banned">' + 'arse' + '</span>');
            newText = newText.toLowerCase().replaceAll('shit', '<span class="banned">' + 'shit' + '</span>');
            newText = newText.toLowerCase().replaceAll('piss', '<span class="banned">' + 'piss' + '</span>');
            newText = newText.toLowerCase().replaceAll('puss', '<span class="banned">' + 'puss' + '</span>');
            newText = newText.toLowerCase().replaceAll('cock', '<span class="banned">' + 'cock' + '</span>');
            newText = newText.toLowerCase().replaceAll('penis', '<span class="banned">' + 'penis' + '</span>');
            newText = newText.toLowerCase().replaceAll('asshole', '<span class="banned">' + 'asshole' + '</span>');
            newText = newText.toLowerCase().replaceAll('bollock', '<span class="banned">' + 'bollock' + '</span>');
            newText = newText.toLowerCase().replaceAll('faggot', '<span class="banned">' + 'foggot' + '</span>');
            newText = newText.toLowerCase().replaceAll('homo', '<span class="banned">' + 'homo' + '</span>');
            newText = newText.toLowerCase().replaceAll('whore', '<span class="banned">' + 'whore' + '</span>');
            newText = newText.toLowerCase().replaceAll('douchebag', '<span class="banned">' + 'douchebag' + '</span>');
            newText = newText.toLowerCase().replaceAll('slut', '<span class="banned">' + 'slut' + '</span>');
            newText = newText.toLowerCase().replaceAll('anal', '<span class="banned">' + 'anal' + '</span>');
            newText = newText.toLowerCase().replaceAll('porn', '<span class="banned">' + 'porn' + '</span>');
            newText = newText.toLowerCase().replaceAll('bastard', '<span class="banned">' + 'bastard' + '</span>');
            newText = newText.toLowerCase().replaceAll('sucker', '<span class="banned">' + 'sucker' + '</span>');
            newText = newText.toLowerCase().replaceAll('nazi', '<span class="banned nazied">' + 'nazi' + '</span>');
            newText = newText.toLowerCase().replaceAll('nazy', '<span class="banned nazied">' + 'nazy' + '</span>');
            newText = newText.toLowerCase().replaceAll('prick', '<span class="banned">' + 'prick' + '</span>');
            newText = newText.toLowerCase().replaceAll('cunt', '<span class="banned">' + 'cunt' + '</span>');
            newText = newText.toLowerCase().replaceAll('retard', '<span class="banned">' + 'retard' + '</span>');
            newText = newText.toLowerCase().replaceAll('hooker', '<span class="banned">' + 'hooker' + '</span>');
            newText = newText.toLowerCase().replaceAll('ukrain', '<span class="ukr">' + 'ukrain' + '</span>');
            
            document.querySelector('a.highlighted-a').innerHTML = newText.replaceAll('\n','<br>');
        });