var urls = [{
        name: 'scheme and domain',
        url: 'http://www.example.org',
        _url: 'http://www.example.org/',
        parts: {
            protocol: 'http',
            username: null,
            password: null,
            hostname: 'www.example.org',
            port: null,
            path: '/',
            query: null,
            fragment: null
        },
        accessors: {
            protocol: 'http',
            username: '',
            password: '',
            port: '',
            path: '/',
            query: '',
            fragment: '',
            authority: 'www.example.org',
            subdomain: 'www',
            domain: 'example.org',
            tld: 'org',
            directory: '/',
            filename: '',
            suffix: '',
            hash: '', // location.hash style
            search: '', // location.search style
            host: 'www.example.org',
            hostname: 'www.example.org'
        },
        is: {
            relative: false,
            name: true,
            sld: false,
            ip: false,
            ip4: false,
            ip6: false,
            idn: false,
            punycode: false
        }
    }, {
        name: 'second level domain',
        url: 'http://www.example.co.uk',
        _url: 'http://www.example.co.uk/',
        parts: {
            protocol: 'http',
            username: null,
            password: null,
            hostname: 'www.example.co.uk',
            port: null,
            path: '/',
            query: null,
            fragment: null
        },
        accessors: {
            protocol: 'http',
            username: '',
            password: '',
            port: '',
            path: '/',
            query: '',
            fragment: '',
            authority: 'www.example.co.uk',
            subdomain: 'www',
            domain: 'example.co.uk',
            tld: 'co.uk',
            directory: '/',
            filename: '',
            suffix: '',
            hash: '', // location.hash style
            search: '', // location.search style
            host: 'www.example.co.uk',
            hostname: 'www.example.co.uk'
        },
        is: {
            relative: false,
            name: true,
            sld: true,
            ip: false,
            ip4: false,
            ip6: false,
            idn: false,
            punycode: false
        }
    },{
        name: 'qualified HTTP',
        url: 'http://www.example.org/some/directory/file.html?query=string#fragment',
        parts: {
            protocol: 'http',
            username: null,
            password: null,
            hostname: 'www.example.org',
            port: null,
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        accessors: {
            protocol: 'http',
            username: '',
            password: '',
            port: '',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment',
            authority: 'www.example.org',
            subdomain: 'www',
            domain: 'example.org',
            tld: 'org',
            directory: '/some/directory',
            filename: 'file.html',
            suffix: 'html',
            hash: '#fragment',
            search: '?query=string',
            host: 'www.example.org',
            hostname: 'www.example.org'
        },
        is: {
            relative: false,
            name: true,
            sld: false,
            ip: false,
            ip4: false,
            ip6: false,
            idn: false,
            punycode: false
        }
    }, {
        name: 'funky suffix',
        url: 'http://www.example.org/some/directory/file.html-is-awesome?query=string#fragment',
        parts: {
            protocol: 'http',
            username: null,
            password: null,
            hostname: 'www.example.org',
            port: null,
            path: '/some/directory/file.html-is-awesome',
            query: 'query=string',
            fragment: 'fragment'
        },
        accessors: {
            protocol: 'http',
            username: '',
            password: '',
            port: '',
            path: '/some/directory/file.html-is-awesome',
            query: 'query=string',
            fragment: 'fragment',
            authority: 'www.example.org',
            subdomain: 'www',
            domain: 'example.org',
            tld: 'org',
            directory: '/some/directory',
            filename: 'file.html-is-awesome',
            suffix: '',
            hash: '#fragment',
            search: '?query=string',
            host: 'www.example.org',
            hostname: 'www.example.org'
        },
        is: {
            relative: false,
            name: true,
            sld: false,
            ip: false,
            ip4: false,
            ip6: false,
            idn: false,
            punycode: false
        }
    }, {
        name: 'complete URL',
        url: 'scheme://user:pass@www.example.org:123/some/directory/file.html?query=string#fragment',
        parts: {
            protocol: 'scheme',
            username: 'user',
            password: 'pass',
            hostname: 'www.example.org',
            port: '123',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        accessors: {
            protocol: 'scheme',
            username: 'user',
            password: 'pass',
            port: '123',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment',
            authority: 'user:pass@www.example.org:123',
            subdomain: 'www',
            domain: 'example.org',
            tld: 'org',
            directory: '/some/directory',
            filename: 'file.html',
            suffix: 'html',
            hash: '#fragment',
            search: '?query=string',
            host: 'www.example.org:123',
            hostname: 'www.example.org'
        },
        is: {
            relative: false,
            name: true,
            sld: false,
            ip: false,
            ip4: false,
            ip6: false,
            idn: false,
            punycode: false
        }
    }, {
        name: 'host-relative: URL',
        url: '/some/directory/file.html?query=string#fragment',
        parts: {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            port: null,
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        accessors: {
            protocol: '',
            username: '',
            password: '',
            port: '',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment',
            authority: '',
            subdomain: '',
            domain: '',
            tld: '',
            directory: '/some/directory',
            filename: 'file.html',
            suffix: 'html',
            hash: '#fragment',
            search: '?query=string',
            host: '',
            hostname: ''
        },
        is: {
            relative: true,
            name: false,
            sld: false,
            ip: false,
            ip4: false,
            ip6: false,
            idn: false,
            punycode: false
        }
    }, {
        name: 'path-relative: URL',
        url: '../some/directory/file.html?query=string#fragment',
        parts: {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            port: null,
            path: '../some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        accessors: {
            protocol: '',
            username: '',
            password: '',
            port: '',
            path: '../some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment',
            authority: '',
            subdomain: '',
            domain: '',
            tld: '',
            directory: '../some/directory',
            filename: 'file.html',
            suffix: 'html',
            hash: '#fragment',
            search: '?query=string',
            host: '',
            hostname: ''
        },
        is: {
            relative: true,
            name: false,
            sld: false,
            ip: false,
            ip4: false,
            ip6: false,
            idn: false,
            punycode: false
        }
    }, {
        name: 'missing scheme',
        url: 'user:pass@www.example.org:123/some/directory/file.html?query=string#fragment',
        parts: {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            port: null,
            path: 'user:pass@www.example.org:123/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        accessors: {
            protocol: '',
            username: '',
            password: '',
            port: '',
            path: 'user:pass@www.example.org:123/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment',
            authority: '',
            subdomain: '',
            domain: '',
            tld: '',
            directory: 'user:pass@www.example.org:123/some/directory',
            filename: 'file.html',
            suffix: 'html',
            hash: '#fragment',
            search: '?query=string',
            host: '',
            hostname: ''
        },
        is: {
            relative: true,
            name: false,
            sld: false,
            ip: false,
            ip4: false,
            ip6: false,
            idn: false,
            punycode: false
        }
    }, {
        name: 'ignoring scheme',
        url: '://user:pass@example.org:123/some/directory/file.html?query=string#fragment',
        _url: 'user:pass@example.org:123/some/directory/file.html?query=string#fragment',
        parts: {
            protocol: "", // not null
            username: 'user',
            password: 'pass',
            hostname: 'example.org',
            port: '123',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        accessors: {
            protocol: '',
            username: 'user',
            password: 'pass',
            port: '123',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment',
            authority: 'user:pass@example.org:123',
            subdomain: '',
            domain: 'example.org',
            tld: 'org',
            directory: '/some/directory',
            filename: 'file.html',
            suffix: 'html',
            hash: '#fragment',
            search: '?query=string',
            host: 'example.org:123',
            hostname: 'example.org'
        },
        is: {
            relative: false,
            name: true,
            sld: false,
            ip: false,
            ip4: false,
            ip6: false,
            idn: false,
            punycode: false
        }
    }, {
        name: 'IPv4',
        url: 'http://user:pass@123.123.123.123:123/some/directory/file.html?query=string#fragment',
        parts: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            hostname: '123.123.123.123',
            port: '123',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        accessors: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            port: '123',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment',
            authority: 'user:pass@123.123.123.123:123',
            subdomain: '',
            domain: '',
            tld: '',
            directory: '/some/directory',
            filename: 'file.html',
            suffix: 'html',
            hash: '#fragment',
            search: '?query=string',
            host: '123.123.123.123:123',
            hostname: '123.123.123.123'
        },
        is: {
            relative: false,
            name: false,
            sld: false,
            ip: true,
            ip4: true,
            ip6: false,
            idn: false,
            punycode: false
        }
    }, {
        name: 'IPv6',
        url: 'http://user:pass@fe80:0000:0000:0000:0204:61ff:fe9d:f156/some/directory/file.html?query=string#fragment',
        parts: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            hostname: 'fe80:0000:0000:0000:0204:61ff:fe9d:f156',
            port: null,
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        accessors: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            port: '',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment',
            authority: 'user:pass@fe80:0000:0000:0000:0204:61ff:fe9d:f156',
            subdomain: '',
            domain: '',
            tld: '',
            directory: '/some/directory',
            filename: 'file.html',
            suffix: 'html',
            hash: '#fragment',
            search: '?query=string',
            host: 'fe80:0000:0000:0000:0204:61ff:fe9d:f156',
            hostname: 'fe80:0000:0000:0000:0204:61ff:fe9d:f156'
        },
        is: {
            relative: false,
            name: false,
            sld: false,
            ip: true,
            ip4: false,
            ip6: true,
            idn: false,
            punycode: false
        }
    }, {
        name: 'IPv6 with port',
        url: 'http://user:pass@[fe80:0000:0000:0000:0204:61ff:fe9d:f156]:123/some/directory/file.html?query=string#fragment',
        parts: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            hostname: 'fe80:0000:0000:0000:0204:61ff:fe9d:f156',
            port: '123',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        accessors: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            port: '123',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment',
            authority: 'user:pass@[fe80:0000:0000:0000:0204:61ff:fe9d:f156]:123',
            subdomain: '',
            domain: '',
            tld: '',
            directory: '/some/directory',
            filename: 'file.html',
            suffix: 'html',
            hash: '#fragment',
            search: '?query=string',
            host: '[fe80:0000:0000:0000:0204:61ff:fe9d:f156]:123',
            hostname: 'fe80:0000:0000:0000:0204:61ff:fe9d:f156'
        },
        is: {
            relative: false,
            name: false,
            sld: false,
            ip: true,
            ip4: false,
            ip6: true,
            idn: false,
            punycode: false
        }
    }, {
        name: 'IDN (punycode)',
        url: 'http://user:pass@xn--exmple-cua.org:123/some/directory/file.html?query=string#fragment',
        parts: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            hostname: 'xn--exmple-cua.org',
            port: '123',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        accessors: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            port: '123',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment',
            authority: 'user:pass@xn--exmple-cua.org:123',
            subdomain: '',
            domain: 'xn--exmple-cua.org',
            tld: 'org',
            directory: '/some/directory',
            filename: 'file.html',
            suffix: 'html',
            hash: '#fragment',
            search: '?query=string',
            host: 'xn--exmple-cua.org:123',
            hostname: 'xn--exmple-cua.org'
        },
        is: {
            relative: false,
            name: true,
            sld: false,
            ip: false,
            ip4: false,
            ip6: false,
            idn: false,
            punycode: true
        }
    }, {
        name: 'IDN',
        url: 'http://user:pass@exämple.org:123/some/directory/file.html?query=string#fragment',
        parts: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            hostname: 'exämple.org',
            port: '123',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment'
        },
        accessors: {
            protocol: 'http',
            username: 'user',
            password: 'pass',
            port: '123',
            path: '/some/directory/file.html',
            query: 'query=string',
            fragment: 'fragment',
            authority: 'user:pass@exämple.org:123',
            subdomain: '',
            domain: 'exämple.org',
            tld: 'org',
            directory: '/some/directory',
            filename: 'file.html',
            suffix: 'html',
            hash: '#fragment',
            search: '?query=string',
            host: 'exämple.org:123',
            hostname: 'exämple.org'
        },
        is: {
            relative: false,
            name: true,
            sld: false,
            ip: false,
            ip4: false,
            ip6: false,
            idn: true,
            punycode: false
        }
    }, {
        name: 'file://',
        url: 'file:///foo/bar/baz.html',
        parts: {
            protocol: 'file',
            username: null,
            password: null,
            hostname: null,
            port: null,
            path: '/foo/bar/baz.html',
            query: null,
            fragment: null
        },
        accessors: {
            protocol: 'file',
            username: '',
            password: '',
            port: '',
            path: '/foo/bar/baz.html',
            query: '',
            fragment: '',
            authority: '',
            subdomain: '',
            domain: '',
            tld: '',
            directory: '/foo/bar',
            filename: 'baz.html',
            suffix: 'html',
            hash: '',
            search: '',
            host: '',
            hostname: ''
        },
        is: {
            relative: true,
            name: false,
            sld: false,
            ip: false,
            ip4: false,
            ip6: false,
            idn: false,
            punycode: false
        }
    }, {
        name: 'Path containing @',
        url: 'http://www.example.org/@foobar',
        parts: {
            protocol: 'http',
            username: null,
            password: null,
            hostname: 'www.example.org',
            port: null,
            path: '/@foobar',
            query: null,
            fragment: null
        },
        accessors: {
            protocol: 'http',
            username: '',
            password: '',
            port: '',
            path: '/@foobar',
            query: '',
            fragment: '',
            authority: 'www.example.org',
            subdomain: 'www',
            domain: 'example.org',
            tld: 'org',
            directory: '/',
            filename: '@foobar',
            suffix: '',
            hash: '', // location.hash style
            search: '', // location.search style
            host: 'www.example.org',
            hostname: 'www.example.org'
        },
        is: {
            relative: false,
            name: true,
            sld: false,
            ip: false,
            ip4: false,
            ip6: false,
            idn: false,
            punycode: false
        }
    }
];

