        function parseFn(data) {
            var rows = [];
            for (var i = 0; i < data.length; i++) {
                rows[rows.length] = {
                    data: data[i],
                    value: data[i],
                    result: data[i]
                };
            }
            return rows;
        }
        var options = {
            minChars: 1,
            max: 10,
            selectFirst:false,
            matchSubset: false,
            matchContains: true,
            dataType: 'jsonp',
            parse: parseFn,
            formatItem: function(row, i, max) { return row; }
        };
