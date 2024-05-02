(() => {
  // functions/scraper/team-info.json
  var team_info_default = {
    "Atlanta Hawks": {
      teamId: 1610612737,
      abbreviation: "ATL",
      teamName: "Atlanta Hawks",
      simpleName: "Hawks",
      location: "Atlanta",
      conference: "EAST",
      color1: "#E03A3E",
      color2: "#C1D32F"
    },
    "Boston Celtics": {
      teamId: 1610612738,
      abbreviation: "BOS",
      teamName: "Boston Celtics",
      simpleName: "Celtics",
      location: "Boston",
      conference: "EAST",
      color1: "#007a33",
      color2: "#fff",
      color3: "#BA9653"
    },
    "Brooklyn Nets": {
      teamId: 1610612751,
      abbreviation: "BKN",
      teamName: "Brooklyn Nets",
      simpleName: "Nets",
      location: "Brooklyn",
      conference: "EAST",
      color1: "#000",
      color2: "#fff"
    },
    "Charlotte Hornets": {
      teamId: 1610612766,
      abbreviation: "CHA",
      teamName: "Charlotte Hornets",
      simpleName: "Hornets",
      location: "Charlotte",
      conference: "EAST",
      color1: "#1D1160",
      color2: "#00788c"
    },
    "Chicago Bulls": {
      teamId: 1610612741,
      abbreviation: "CHI",
      teamName: "Chicago Bulls",
      simpleName: "Bulls",
      location: "Chicago",
      conference: "EAST",
      color1: "#CE1141",
      color2: "#fff"
    },
    "Cleveland Cavaliers": {
      teamId: 1610612739,
      abbreviation: "CLE",
      teamName: "Cleveland Cavaliers",
      simpleName: "Cavaliers",
      location: "Cleveland",
      conference: "EAST",
      color1: "#6f263d",
      color2: "#ffb81c"
    },
    "Dallas Mavericks": {
      teamId: 1610612742,
      abbreviation: "DAL",
      teamName: "Dallas Mavericks",
      simpleName: "Mavericks",
      location: "Dallas",
      conference: "WEST",
      color1: "#00538C",
      color2: "#fff"
    },
    "Denver Nuggets": {
      teamId: 1610612743,
      abbreviation: "DEN",
      teamName: "Denver Nuggets",
      simpleName: "Nuggets",
      location: "Denver",
      conference: "WEST",
      color1: "#00285E",
      color2: "#ffc72c"
    },
    "Detroit Pistons": {
      teamId: 1610612765,
      abbreviation: "DET",
      teamName: "Detroit Pistons",
      simpleName: "Pistons",
      location: "Detroit",
      conference: "EAST",
      color1: "#ED174C",
      color2: "#fff",
      color3: "#006BB6"
    },
    "Golden State Warriors": {
      teamId: 1610612744,
      abbreviation: "GSW",
      teamName: "Golden State Warriors",
      simpleName: "Warriors",
      location: "Golden State",
      conference: "WEST",
      color1: "#006BB6",
      color2: "#fdb927"
    },
    "Houston Rockets": {
      teamId: 1610612745,
      abbreviation: "HOU",
      teamName: "Houston Rockets",
      simpleName: "Rockets",
      location: "Houston",
      conference: "WEST",
      color1: "#ce1141",
      color2: "#fff"
    },
    "Indiana Pacers": {
      teamId: 1610612754,
      abbreviation: "IND",
      teamName: "Indiana Pacers",
      simpleName: "Pacers",
      location: "Indiana",
      conference: "EAST",
      color1: "#fdbb30",
      color2: "#002D62"
    },
    "Los Angeles Clippers": {
      teamId: 1610612746,
      abbreviation: "LAC",
      teamName: "Los Angeles Clippers",
      simpleName: "Clippers",
      location: "Los Angeles",
      conference: "WEST",
      color1: "#ED174C",
      color2: "#fff"
    },
    "Los Angeles Lakers": {
      teamId: 1610612747,
      abbreviation: "LAL",
      teamName: "Los Angeles Lakers",
      simpleName: "Lakers",
      location: "Los Angeles",
      conference: "WEST",
      color1: "#ffc72c",
      color2: "#552583"
    },
    "Memphis Grizzlies": {
      teamId: 1610612763,
      abbreviation: "MEM",
      teamName: "Memphis Grizzlies",
      simpleName: "Grizzlies",
      location: "Memphis",
      conference: "WEST",
      color1: "#6189B9",
      color2: "#00285E"
    },
    "Miami Heat": {
      teamId: 1610612748,
      abbreviation: "MIA",
      teamName: "Miami Heat",
      simpleName: "Heat",
      location: "Miami",
      conference: "EAST",
      color1: "#98002e",
      color2: "#F9A01B"
    },
    "Milwaukee Bucks": {
      teamId: 1610612749,
      abbreviation: "MIL",
      teamName: "Milwaukee Bucks",
      simpleName: "Bucks",
      location: "Milwaukee",
      conference: "EAST",
      color1: "#00471b",
      color2: "#eee1c6"
    },
    "Minnesota Timberwolves": {
      teamId: 1610612750,
      abbreviation: "MIN",
      teamName: "Minnesota Timberwolves",
      simpleName: "Timberwolves",
      location: "Minnesota",
      conference: "WEST",
      color1: "#0c2340",
      color2: "#236192"
    },
    "New Orleans Pelicans": {
      teamId: 1610612740,
      abbreviation: "NOP",
      teamName: "New Orleans Pelicans",
      simpleName: "Pelicans",
      location: "New Orleans",
      conference: "WEST",
      color1: "#002b5c",
      color2: "#E31837"
    },
    "New York Knicks": {
      teamId: 1610612752,
      abbreviation: "NYK",
      teamName: "New York Knicks",
      simpleName: "Knicks",
      location: "New York",
      conference: "EAST",
      color1: "#006BB6",
      color2: "#f58426"
    },
    "Oklahoma City Thunder": {
      teamId: 1610612760,
      abbreviation: "OKC",
      teamName: "Oklahoma City Thunder",
      simpleName: "Thunder",
      location: "Oklahoma City",
      conference: "WEST",
      color1: "#007AC1",
      color2: "#fff",
      color3: "#ef3b24"
    },
    "Orlando Magic": {
      teamId: 1610612753,
      abbreviation: "ORL",
      teamName: "Orlando Magic",
      simpleName: "Magic",
      location: "Orlando",
      conference: "EAST",
      color1: "#0057b8",
      color2: "#c2ccd2"
    },
    "Philadelphia 76ers": {
      teamId: 1610612755,
      abbreviation: "PHI",
      teamName: "Philadelphia 76ers",
      simpleName: "76ers",
      location: "Philadelphia",
      conference: "EAST",
      color1: "#006BB6",
      color2: "#fff",
      color3: "#ED174C"
    },
    "Phoenix Suns": {
      teamId: 1610612756,
      abbreviation: "PHX",
      teamName: "Phoenix Suns",
      simpleName: "Suns",
      location: "Phoenix",
      conference: "WEST",
      color1: "#1D1160",
      color2: "#e56020"
    },
    "Portland Trail Blazers": {
      teamId: 1610612757,
      abbreviation: "POR",
      teamName: "Portland Trail Blazers",
      simpleName: "Trail Blazers",
      location: "Portland",
      conference: "WEST",
      color1: "#e03a3e",
      color2: "#000"
    },
    "Sacramento Kings": {
      teamId: 1610612758,
      abbreviation: "SAC",
      teamName: "Sacramento Kings",
      simpleName: "Kings",
      location: "Sacramento",
      conference: "WEST",
      color1: "#592d81",
      color2: "#fff",
      color3: "#63727a"
    },
    "San Antonio Spurs": {
      teamId: 1610612759,
      abbreviation: "SAS",
      teamName: "San Antonio Spurs",
      simpleName: "Spurs",
      location: "San Antonio",
      conference: "WEST",
      color1: "#000",
      color2: "#c3ced4"
    },
    "Toronto Raptors": {
      teamId: 1610612761,
      abbreviation: "TOR",
      teamName: "Toronto Raptors",
      simpleName: "Raptors",
      location: "Toronto",
      conference: "EAST",
      color1: "#000000",
      color2: "#ce1141"
    },
    "Utah Jazz": {
      teamId: 1610612762,
      abbreviation: "UTA",
      teamName: "Utah Jazz",
      simpleName: "Jazz",
      location: "Utah",
      conference: "WEST",
      color1: "#002b5c",
      color2: "#f8a01b"
    },
    "Washington Wizards": {
      teamId: 1610612764,
      abbreviation: "WAS",
      teamName: "Washington Wizards",
      simpleName: "Wizards",
      location: "Washington",
      conference: "EAST",
      color1: "#002b5c",
      color2: "#e31937"
    },
    "Seattle SuperSonics": {
      abbreviation: "SEA",
      conference: "WEST",
      old: true,
      color1: "#173F35",
      color2: "#9E2A2F"
    },
    "New Jersey Nets": {
      teamId: 1610612751,
      abbreviation: "NJN",
      old: true,
      teamName: "(Brooklyn) Nets",
      simpleName: "Nets",
      location: "Brooklyn",
      conference: "EAST",
      color1: "#000",
      color2: "#fff"
    },
    "New Orleans Hornets": {
      teamId: 1610612766,
      old: true,
      abbreviation: "NOH",
      teamName: "New Orleans Hornets",
      simpleName: "Hornets",
      location: "Charlotte",
      conference: "EAST",
      color1: "#1D1160",
      color2: "#00788c"
    },
    "Washington Bullets": {
      teamId: 1610612764,
      old: true,
      abbreviation: "WAS",
      teamName: "Washington Wizards",
      simpleName: "Wizards",
      location: "Washington",
      conference: "EAST",
      color1: "#002b5c",
      color2: "#e31937"
    },
    "Charlotte Bobcats": {
      old: true,
      abbreviation: "CHB",
      teamName: "New Orleans Hornets",
      simpleName: "Hornets",
      location: "Charlotte",
      conference: "EAST",
      color1: "#1D1160",
      color2: "#00788c"
    }
  };

  // node_modules/d3-array/src/ascending.js
  function ascending_default(a2, b) {
    return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
  }

  // node_modules/d3-array/src/bisector.js
  function bisector_default(compare) {
    if (compare.length === 1)
      compare = ascendingComparator(compare);
    return {
      left: function(a2, x4, lo, hi) {
        if (lo == null)
          lo = 0;
        if (hi == null)
          hi = a2.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a2[mid], x4) < 0)
            lo = mid + 1;
          else
            hi = mid;
        }
        return lo;
      },
      right: function(a2, x4, lo, hi) {
        if (lo == null)
          lo = 0;
        if (hi == null)
          hi = a2.length;
        while (lo < hi) {
          var mid = lo + hi >>> 1;
          if (compare(a2[mid], x4) > 0)
            hi = mid;
          else
            lo = mid + 1;
        }
        return lo;
      }
    };
  }
  function ascendingComparator(f) {
    return function(d, x4) {
      return ascending_default(f(d), x4);
    };
  }

  // node_modules/d3-array/src/bisect.js
  var ascendingBisect = bisector_default(ascending_default);
  var bisectRight = ascendingBisect.right;
  var bisectLeft = ascendingBisect.left;

  // node_modules/d3-array/src/array.js
  var array = Array.prototype;
  var slice = array.slice;
  var map = array.map;

  // node_modules/d3-array/src/ticks.js
  var e10 = Math.sqrt(50);
  var e5 = Math.sqrt(10);
  var e2 = Math.sqrt(2);

  // node_modules/d3-array/src/merge.js
  function merge_default(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array4;
    while (++i < n)
      j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
      array4 = arrays[n];
      m = array4.length;
      while (--m >= 0) {
        merged[--j] = array4[m];
      }
    }
    return merged;
  }

  // node_modules/d3-axis/src/array.js
  var slice2 = Array.prototype.slice;

  // node_modules/d3-dispatch/src/dispatch.js
  var noop = { value: function() {
  } };
  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || t in _)
        throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }
  function Dispatch(_) {
    this._ = _;
  }
  function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0)
        name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t))
        throw new Error("unknown type: " + t);
      return { type: t, name };
    });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
      if (arguments.length < 2) {
        while (++i < n)
          if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
            return t;
        return;
      }
      if (callback != null && typeof callback !== "function")
        throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type)
          _[t] = set(_[t], typename.name, callback);
        else if (callback == null)
          for (t in _)
            _[t] = set(_[t], typename.name, null);
      }
      return this;
    },
    copy: function() {
      var copy3 = {}, _ = this._;
      for (var t in _)
        copy3[t] = _[t].slice();
      return new Dispatch(copy3);
    },
    call: function(type2, that) {
      if ((n = arguments.length - 2) > 0)
        for (var args = new Array(n), i = 0, n, t; i < n; ++i)
          args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type2))
        throw new Error("unknown type: " + type2);
      for (t = this._[type2], i = 0, n = t.length; i < n; ++i)
        t[i].value.apply(that, args);
    },
    apply: function(type2, that, args) {
      if (!this._.hasOwnProperty(type2))
        throw new Error("unknown type: " + type2);
      for (var t = this._[type2], i = 0, n = t.length; i < n; ++i)
        t[i].value.apply(that, args);
    }
  };
  function get(type2, name) {
    for (var i = 0, n = type2.length, c3; i < n; ++i) {
      if ((c3 = type2[i]).name === name) {
        return c3.value;
      }
    }
  }
  function set(type2, name, callback) {
    for (var i = 0, n = type2.length; i < n; ++i) {
      if (type2[i].name === name) {
        type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
        break;
      }
    }
    if (callback != null)
      type2.push({ name, value: callback });
    return type2;
  }
  var dispatch_default = dispatch;

  // node_modules/d3-selection/src/namespaces.js
  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces_default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  // node_modules/d3-selection/src/namespace.js
  function namespace_default(name) {
    var prefix2 = name += "", i = prefix2.indexOf(":");
    if (i >= 0 && (prefix2 = name.slice(0, i)) !== "xmlns")
      name = name.slice(i + 1);
    return namespaces_default.hasOwnProperty(prefix2) ? { space: namespaces_default[prefix2], local: name } : name;
  }

  // node_modules/d3-selection/src/creator.js
  function creatorInherit(name) {
    return function() {
      var document2 = this.ownerDocument, uri = this.namespaceURI;
      return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator_default(name) {
    var fullname = namespace_default(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }

  // node_modules/d3-selection/src/selector.js
  function none() {
  }
  function selector_default(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  }

  // node_modules/d3-selection/src/selection/select.js
  function select_default(select) {
    if (typeof select !== "function")
      select = selector_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node)
            subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/selectorAll.js
  function empty() {
    return [];
  }
  function selectorAll_default(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  }

  // node_modules/d3-selection/src/selection/selectAll.js
  function selectAll_default(select) {
    if (typeof select !== "function")
      select = selectorAll_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }
    return new Selection(subgroups, parents);
  }

  // node_modules/d3-selection/src/matcher.js
  function matcher_default(selector) {
    return function() {
      return this.matches(selector);
    };
  }

  // node_modules/d3-selection/src/selection/filter.js
  function filter_default(match) {
    if (typeof match !== "function")
      match = matcher_default(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/selection/sparse.js
  function sparse_default(update) {
    return new Array(update.length);
  }

  // node_modules/d3-selection/src/selection/enter.js
  function enter_default() {
    return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
  }
  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
      return this._parent.querySelectorAll(selector);
    }
  };

  // node_modules/d3-selection/src/constant.js
  function constant_default2(x4) {
    return function() {
      return x4;
    };
  }

  // node_modules/d3-selection/src/selection/data.js
  var keyPrefix = "$";
  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }
  function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = {}, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
        if (keyValue in nodeByKeyValue) {
          exit[i] = node;
        } else {
          nodeByKeyValue[keyValue] = node;
        }
      }
    }
    for (i = 0; i < dataLength; ++i) {
      keyValue = keyPrefix + key.call(parent, data[i], i, data);
      if (node = nodeByKeyValue[keyValue]) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue[keyValue] = null;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) {
        exit[i] = node;
      }
    }
  }
  function data_default(value, key) {
    if (!value) {
      data = new Array(this.size()), j = -1;
      this.each(function(d) {
        data[++j] = d;
      });
      return data;
    }
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function")
      value = constant_default2(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j], group = groups[j], groupLength = group.length, data = value.call(parent, parent && parent.__data__, j, parents), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1)
            i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength)
            ;
          previous._next = next || null;
        }
      }
    }
    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }

  // node_modules/d3-selection/src/selection/exit.js
  function exit_default() {
    return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
  }

  // node_modules/d3-selection/src/selection/join.js
  function join_default(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null)
      update = onupdate(update);
    if (onexit == null)
      exit.remove();
    else
      onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  // node_modules/d3-selection/src/selection/merge.js
  function merge_default2(selection2) {
    for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Selection(merges, this._parents);
  }

  // node_modules/d3-selection/src/selection/order.js
  function order_default() {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4)
            next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/sort.js
  function sort_default(compare) {
    if (!compare)
      compare = ascending;
    function compareNode(a2, b) {
      return a2 && b ? compare(a2.__data__, b.__data__) : !a2 - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
  }
  function ascending(a2, b) {
    return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
  }

  // node_modules/d3-selection/src/selection/call.js
  function call_default() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  // node_modules/d3-selection/src/selection/nodes.js
  function nodes_default() {
    var nodes = new Array(this.size()), i = -1;
    this.each(function() {
      nodes[++i] = this;
    });
    return nodes;
  }

  // node_modules/d3-selection/src/selection/node.js
  function node_default() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node)
          return node;
      }
    }
    return null;
  }

  // node_modules/d3-selection/src/selection/size.js
  function size_default() {
    var size = 0;
    this.each(function() {
      ++size;
    });
    return size;
  }

  // node_modules/d3-selection/src/selection/empty.js
  function empty_default() {
    return !this.node();
  }

  // node_modules/d3-selection/src/selection/each.js
  function each_default(callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i])
          callback.call(node, node.__data__, i, group);
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/attr.js
  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.removeAttribute(name);
      else
        this.setAttribute(name, v);
    };
  }
  function attrFunctionNS(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.removeAttributeNS(fullname.space, fullname.local);
      else
        this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }
  function attr_default(name, value) {
    var fullname = namespace_default(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
  }

  // node_modules/d3-selection/src/window.js
  function window_default(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
  }

  // node_modules/d3-selection/src/selection/style.js
  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.style.removeProperty(name);
      else
        this.style.setProperty(name, v, priority);
    };
  }
  function style_default(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  // node_modules/d3-selection/src/selection/property.js
  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        delete this[name];
      else
        this[name] = v;
    };
  }
  function property_default(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }

  // node_modules/d3-selection/src/selection/classed.js
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
      list.add(names[i]);
  }
  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
      list.remove(names[i]);
  }
  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function classed_default(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n)
        if (!list.contains(names[i]))
          return false;
      return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }

  // node_modules/d3-selection/src/selection/text.js
  function textRemove() {
    this.textContent = "";
  }
  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }
  function text_default(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
  }

  // node_modules/d3-selection/src/selection/html.js
  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }
  function html_default(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }

  // node_modules/d3-selection/src/selection/raise.js
  function raise() {
    if (this.nextSibling)
      this.parentNode.appendChild(this);
  }
  function raise_default() {
    return this.each(raise);
  }

  // node_modules/d3-selection/src/selection/lower.js
  function lower() {
    if (this.previousSibling)
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function lower_default() {
    return this.each(lower);
  }

  // node_modules/d3-selection/src/selection/append.js
  function append_default(name) {
    var create2 = typeof name === "function" ? name : creator_default(name);
    return this.select(function() {
      return this.appendChild(create2.apply(this, arguments));
    });
  }

  // node_modules/d3-selection/src/selection/insert.js
  function constantNull() {
    return null;
  }
  function insert_default(name, before) {
    var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
    return this.select(function() {
      return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  // node_modules/d3-selection/src/selection/remove.js
  function remove() {
    var parent = this.parentNode;
    if (parent)
      parent.removeChild(this);
  }
  function remove_default() {
    return this.each(remove);
  }

  // node_modules/d3-selection/src/selection/clone.js
  function selection_cloneShallow() {
    return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
  }
  function selection_cloneDeep() {
    return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
  }
  function clone_default(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  // node_modules/d3-selection/src/selection/datum.js
  function datum_default(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }

  // node_modules/d3-selection/src/selection/on.js
  var filterEvents = {};
  var event = null;
  if (typeof document !== "undefined") {
    element = document.documentElement;
    if (!("onmouseenter" in element)) {
      filterEvents = { mouseenter: "mouseover", mouseleave: "mouseout" };
    }
  }
  var element;
  function filterContextListener(listener, index, group) {
    listener = contextListener(listener, index, group);
    return function(event2) {
      var related = event2.relatedTarget;
      if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) {
        listener.call(this, event2);
      }
    };
  }
  function contextListener(listener, index, group) {
    return function(event1) {
      var event0 = event;
      event = event1;
      try {
        listener.call(this, this.__data__, index, group);
      } finally {
        event = event0;
      }
    };
  }
  function parseTypenames2(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0)
        name = t.slice(i + 1), t = t.slice(0, i);
      return { type: t, name };
    });
  }
  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on)
        return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.capture);
        } else {
          on[++i] = o;
        }
      }
      if (++i)
        on.length = i;
      else
        delete this.__on;
    };
  }
  function onAdd(typename, value, capture) {
    var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
    return function(d, i, group) {
      var on = this.__on, o, listener = wrap(value, i, group);
      if (on)
        for (var j = 0, m = on.length; j < m; ++j) {
          if ((o = on[j]).type === typename.type && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.capture);
            this.addEventListener(o.type, o.listener = listener, o.capture = capture);
            o.value = value;
            return;
          }
        }
      this.addEventListener(typename.type, listener, capture);
      o = { type: typename.type, name: typename.name, value, listener, capture };
      if (!on)
        this.__on = [o];
      else
        on.push(o);
    };
  }
  function on_default(typename, value, capture) {
    var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on)
        for (var j = 0, m = on.length, o; j < m; ++j) {
          for (i = 0, o = on[j]; i < n; ++i) {
            if ((t = typenames[i]).type === o.type && t.name === o.name) {
              return o.value;
            }
          }
        }
      return;
    }
    on = value ? onAdd : onRemove;
    if (capture == null)
      capture = false;
    for (i = 0; i < n; ++i)
      this.each(on(typenames[i], value, capture));
    return this;
  }

  // node_modules/d3-selection/src/selection/dispatch.js
  function dispatchEvent(node, type2, params) {
    var window2 = window_default(node), event2 = window2.CustomEvent;
    if (typeof event2 === "function") {
      event2 = new event2(type2, params);
    } else {
      event2 = window2.document.createEvent("Event");
      if (params)
        event2.initEvent(type2, params.bubbles, params.cancelable), event2.detail = params.detail;
      else
        event2.initEvent(type2, false, false);
    }
    node.dispatchEvent(event2);
  }
  function dispatchConstant(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params);
    };
  }
  function dispatchFunction(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params.apply(this, arguments));
    };
  }
  function dispatch_default2(type2, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
  }

  // node_modules/d3-selection/src/selection/index.js
  var root = [null];
  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection([[document.documentElement]], root);
  }
  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: select_default,
    selectAll: selectAll_default,
    filter: filter_default,
    data: data_default,
    enter: enter_default,
    exit: exit_default,
    join: join_default,
    merge: merge_default2,
    order: order_default,
    sort: sort_default,
    call: call_default,
    nodes: nodes_default,
    node: node_default,
    size: size_default,
    empty: empty_default,
    each: each_default,
    attr: attr_default,
    style: style_default,
    property: property_default,
    classed: classed_default,
    text: text_default,
    html: html_default,
    raise: raise_default,
    lower: lower_default,
    append: append_default,
    insert: insert_default,
    remove: remove_default,
    clone: clone_default,
    datum: datum_default,
    on: on_default,
    dispatch: dispatch_default2
  };
  var selection_default = selection;

  // node_modules/d3-selection/src/select.js
  function select_default2(selector) {
    return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
  }

  // node_modules/d3-selection/src/local.js
  var nextId = 0;
  function local() {
    return new Local();
  }
  function Local() {
    this._ = "@" + (++nextId).toString(36);
  }
  Local.prototype = local.prototype = {
    constructor: Local,
    get: function(node) {
      var id2 = this._;
      while (!(id2 in node))
        if (!(node = node.parentNode))
          return;
      return node[id2];
    },
    set: function(node, value) {
      return node[this._] = value;
    },
    remove: function(node) {
      return this._ in node && delete node[this._];
    },
    toString: function() {
      return this._;
    }
  };

  // node_modules/d3-drag/src/event.js
  function DragEvent(target, type2, subject, id2, active, x4, y4, dx, dy, dispatch2) {
    this.target = target;
    this.type = type2;
    this.subject = subject;
    this.identifier = id2;
    this.active = active;
    this.x = x4;
    this.y = y4;
    this.dx = dx;
    this.dy = dy;
    this._ = dispatch2;
  }
  DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
  };

  // node_modules/d3-color/src/define.js
  function define_default(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition)
      prototype[key] = definition[key];
    return prototype;
  }

  // node_modules/d3-color/src/color.js
  function Color() {
  }
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*";
  var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var reHex3 = /^#([0-9a-f]{3})$/;
  var reHex6 = /^#([0-9a-f]{6})$/;
  var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
  var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
  var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
  var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
  var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
  var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
  var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  define_default(Color, color, {
    displayable: function() {
      return this.rgb().displayable();
    },
    hex: function() {
      return this.rgb().hex();
    },
    toString: function() {
      return this.rgb() + "";
    }
  });
  function color(format2) {
    var m;
    format2 = (format2 + "").trim().toLowerCase();
    return (m = reHex3.exec(format2)) ? (m = parseInt(m[1], 16), new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1)) : (m = reHex6.exec(format2)) ? rgbn(parseInt(m[1], 16)) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n) {
    return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
  }
  function rgba(r, g, b, a2) {
    if (a2 <= 0)
      r = g = b = NaN;
    return new Rgb(r, g, b, a2);
  }
  function rgbConvert(o) {
    if (!(o instanceof Color))
      o = color(o);
    if (!o)
      return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }
  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  define_default(Rgb, rgb, extend(Color, {
    brighter: function(k2) {
      k2 = k2 == null ? brighter : Math.pow(brighter, k2);
      return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
    },
    darker: function(k2) {
      k2 = k2 == null ? darker : Math.pow(darker, k2);
      return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
    },
    rgb: function() {
      return this;
    },
    displayable: function() {
      return 0 <= this.r && this.r <= 255 && (0 <= this.g && this.g <= 255) && (0 <= this.b && this.b <= 255) && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: function() {
      return "#" + hex(this.r) + hex(this.g) + hex(this.b);
    },
    toString: function() {
      var a2 = this.opacity;
      a2 = isNaN(a2) ? 1 : Math.max(0, Math.min(1, a2));
      return (a2 === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a2 === 1 ? ")" : ", " + a2 + ")");
    }
  }));
  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h, s2, l, a2) {
    if (a2 <= 0)
      h = s2 = l = NaN;
    else if (l <= 0 || l >= 1)
      h = s2 = NaN;
    else if (s2 <= 0)
      h = NaN;
    return new Hsl(h, s2, l, a2);
  }
  function hslConvert(o) {
    if (o instanceof Hsl)
      return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color))
      o = color(o);
    if (!o)
      return new Hsl();
    if (o instanceof Hsl)
      return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max3 = Math.max(r, g, b), h = NaN, s2 = max3 - min2, l = (max3 + min2) / 2;
    if (s2) {
      if (r === max3)
        h = (g - b) / s2 + (g < b) * 6;
      else if (g === max3)
        h = (b - r) / s2 + 2;
      else
        h = (r - g) / s2 + 4;
      s2 /= l < 0.5 ? max3 + min2 : 2 - max3 - min2;
      h *= 60;
    } else {
      s2 = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s2, l, o.opacity);
  }
  function hsl(h, s2, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s2, l, opacity == null ? 1 : opacity);
  }
  function Hsl(h, s2, l, opacity) {
    this.h = +h;
    this.s = +s2;
    this.l = +l;
    this.opacity = +opacity;
  }
  define_default(Hsl, hsl, extend(Color, {
    brighter: function(k2) {
      k2 = k2 == null ? brighter : Math.pow(brighter, k2);
      return new Hsl(this.h, this.s, this.l * k2, this.opacity);
    },
    darker: function(k2) {
      k2 = k2 == null ? darker : Math.pow(darker, k2);
      return new Hsl(this.h, this.s, this.l * k2, this.opacity);
    },
    rgb: function() {
      var h = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s2, m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    displayable: function() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
    }
  }));
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }

  // node_modules/d3-color/src/math.js
  var deg2rad = Math.PI / 180;
  var rad2deg = 180 / Math.PI;

  // node_modules/d3-color/src/lab.js
  var K = 18;
  var Xn = 0.96422;
  var Yn = 1;
  var Zn = 0.82521;
  var t0 = 4 / 29;
  var t1 = 6 / 29;
  var t2 = 3 * t1 * t1;
  var t3 = t1 * t1 * t1;
  function labConvert(o) {
    if (o instanceof Lab)
      return new Lab(o.l, o.a, o.b, o.opacity);
    if (o instanceof Hcl) {
      if (isNaN(o.h))
        return new Lab(o.l, 0, 0, o.opacity);
      var h = o.h * deg2rad;
      return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
    }
    if (!(o instanceof Rgb))
      o = rgbConvert(o);
    var r = rgb2lrgb(o.r), g = rgb2lrgb(o.g), b = rgb2lrgb(o.b), y4 = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x4, z;
    if (r === g && g === b)
      x4 = z = y4;
    else {
      x4 = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
      z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
    }
    return new Lab(116 * y4 - 16, 500 * (x4 - y4), 200 * (y4 - z), o.opacity);
  }
  function lab(l, a2, b, opacity) {
    return arguments.length === 1 ? labConvert(l) : new Lab(l, a2, b, opacity == null ? 1 : opacity);
  }
  function Lab(l, a2, b, opacity) {
    this.l = +l;
    this.a = +a2;
    this.b = +b;
    this.opacity = +opacity;
  }
  define_default(Lab, lab, extend(Color, {
    brighter: function(k2) {
      return new Lab(this.l + K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
    },
    darker: function(k2) {
      return new Lab(this.l - K * (k2 == null ? 1 : k2), this.a, this.b, this.opacity);
    },
    rgb: function() {
      var y4 = (this.l + 16) / 116, x4 = isNaN(this.a) ? y4 : y4 + this.a / 500, z = isNaN(this.b) ? y4 : y4 - this.b / 200;
      x4 = Xn * lab2xyz(x4);
      y4 = Yn * lab2xyz(y4);
      z = Zn * lab2xyz(z);
      return new Rgb(
        lrgb2rgb(3.1338561 * x4 - 1.6168667 * y4 - 0.4906146 * z),
        lrgb2rgb(-0.9787684 * x4 + 1.9161415 * y4 + 0.033454 * z),
        lrgb2rgb(0.0719453 * x4 - 0.2289914 * y4 + 1.4052427 * z),
        this.opacity
      );
    }
  }));
  function xyz2lab(t) {
    return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
  }
  function lab2xyz(t) {
    return t > t1 ? t * t * t : t2 * (t - t0);
  }
  function lrgb2rgb(x4) {
    return 255 * (x4 <= 31308e-7 ? 12.92 * x4 : 1.055 * Math.pow(x4, 1 / 2.4) - 0.055);
  }
  function rgb2lrgb(x4) {
    return (x4 /= 255) <= 0.04045 ? x4 / 12.92 : Math.pow((x4 + 0.055) / 1.055, 2.4);
  }
  function hclConvert(o) {
    if (o instanceof Hcl)
      return new Hcl(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof Lab))
      o = labConvert(o);
    if (o.a === 0 && o.b === 0)
      return new Hcl(NaN, 0, o.l, o.opacity);
    var h = Math.atan2(o.b, o.a) * rad2deg;
    return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
  }
  function hcl(h, c3, l, opacity) {
    return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c3, l, opacity == null ? 1 : opacity);
  }
  function Hcl(h, c3, l, opacity) {
    this.h = +h;
    this.c = +c3;
    this.l = +l;
    this.opacity = +opacity;
  }
  define_default(Hcl, hcl, extend(Color, {
    brighter: function(k2) {
      return new Hcl(this.h, this.c, this.l + K * (k2 == null ? 1 : k2), this.opacity);
    },
    darker: function(k2) {
      return new Hcl(this.h, this.c, this.l - K * (k2 == null ? 1 : k2), this.opacity);
    },
    rgb: function() {
      return labConvert(this).rgb();
    }
  }));

  // node_modules/d3-color/src/cubehelix.js
  var A = -0.14861;
  var B = 1.78277;
  var C = -0.29227;
  var D = -0.90649;
  var E = 1.97294;
  var ED = E * D;
  var EB = E * B;
  var BC_DA = B * C - D * A;
  function cubehelixConvert(o) {
    if (o instanceof Cubehelix)
      return new Cubehelix(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Rgb))
      o = rgbConvert(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB), bl = b - l, k2 = (E * (g - l) - C * bl) / D, s2 = Math.sqrt(k2 * k2 + bl * bl) / (E * l * (1 - l)), h = s2 ? Math.atan2(k2, bl) * rad2deg - 120 : NaN;
    return new Cubehelix(h < 0 ? h + 360 : h, s2, l, o.opacity);
  }
  function cubehelix(h, s2, l, opacity) {
    return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s2, l, opacity == null ? 1 : opacity);
  }
  function Cubehelix(h, s2, l, opacity) {
    this.h = +h;
    this.s = +s2;
    this.l = +l;
    this.opacity = +opacity;
  }
  define_default(Cubehelix, cubehelix, extend(Color, {
    brighter: function(k2) {
      k2 = k2 == null ? brighter : Math.pow(brighter, k2);
      return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
    },
    darker: function(k2) {
      k2 = k2 == null ? darker : Math.pow(darker, k2);
      return new Cubehelix(this.h, this.s, this.l * k2, this.opacity);
    },
    rgb: function() {
      var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad, l = +this.l, a2 = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
      return new Rgb(
        255 * (l + a2 * (A * cosh + B * sinh)),
        255 * (l + a2 * (C * cosh + D * sinh)),
        255 * (l + a2 * (E * cosh)),
        this.opacity
      );
    }
  }));

  // node_modules/d3-interpolate/src/basis.js
  function basis(t13, v0, v1, v2, v3) {
    var t22 = t13 * t13, t32 = t22 * t13;
    return ((1 - 3 * t13 + 3 * t22 - t32) * v0 + (4 - 6 * t22 + 3 * t32) * v1 + (1 + 3 * t13 + 3 * t22 - 3 * t32) * v2 + t32 * v3) / 6;
  }
  function basis_default(values) {
    var n = values.length - 1;
    return function(t) {
      var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
      return basis((t - i / n) * n, v0, v1, v2, v3);
    };
  }

  // node_modules/d3-interpolate/src/basisClosed.js
  function basisClosed_default(values) {
    var n = values.length;
    return function(t) {
      var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
      return basis((t - i / n) * n, v0, v1, v2, v3);
    };
  }

  // node_modules/d3-interpolate/src/constant.js
  function constant_default4(x4) {
    return function() {
      return x4;
    };
  }

  // node_modules/d3-interpolate/src/color.js
  function linear(a2, d) {
    return function(t) {
      return a2 + t * d;
    };
  }
  function exponential(a2, b, y4) {
    return a2 = Math.pow(a2, y4), b = Math.pow(b, y4) - a2, y4 = 1 / y4, function(t) {
      return Math.pow(a2 + t * b, y4);
    };
  }
  function hue(a2, b) {
    var d = b - a2;
    return d ? linear(a2, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default4(isNaN(a2) ? b : a2);
  }
  function gamma(y4) {
    return (y4 = +y4) === 1 ? nogamma : function(a2, b) {
      return b - a2 ? exponential(a2, b, y4) : constant_default4(isNaN(a2) ? b : a2);
    };
  }
  function nogamma(a2, b) {
    var d = b - a2;
    return d ? linear(a2, d) : constant_default4(isNaN(a2) ? b : a2);
  }

  // node_modules/d3-interpolate/src/rgb.js
  var rgb_default = function rgbGamma(y4) {
    var color2 = gamma(y4);
    function rgb2(start2, end) {
      var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.r = r(t);
        start2.g = g(t);
        start2.b = b(t);
        start2.opacity = opacity(t);
        return start2 + "";
      };
    }
    rgb2.gamma = rgbGamma;
    return rgb2;
  }(1);
  function rgbSpline(spline) {
    return function(colors) {
      var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
      for (i = 0; i < n; ++i) {
        color2 = rgb(colors[i]);
        r[i] = color2.r || 0;
        g[i] = color2.g || 0;
        b[i] = color2.b || 0;
      }
      r = spline(r);
      g = spline(g);
      b = spline(b);
      color2.opacity = 1;
      return function(t) {
        color2.r = r(t);
        color2.g = g(t);
        color2.b = b(t);
        return color2 + "";
      };
    };
  }
  var rgbBasis = rgbSpline(basis_default);
  var rgbBasisClosed = rgbSpline(basisClosed_default);

  // node_modules/d3-interpolate/src/number.js
  function number_default2(a2, b) {
    return a2 = +a2, b -= a2, function(t) {
      return a2 + b * t;
    };
  }

  // node_modules/d3-interpolate/src/string.js
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var reB = new RegExp(reA.source, "g");
  function zero(b) {
    return function() {
      return b;
    };
  }
  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }
  function string_default(a2, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q = [];
    a2 = a2 + "", b = b + "";
    while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s2[i])
          s2[i] += bs;
        else
          s2[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s2[i])
          s2[i] += bm;
        else
          s2[++i] = bm;
      } else {
        s2[++i] = null;
        q.push({ i, x: number_default2(am, bm) });
      }
      bi = reB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s2[i])
        s2[i] += bs;
      else
        s2[++i] = bs;
    }
    return s2.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
      for (var i2 = 0, o; i2 < b; ++i2)
        s2[(o = q[i2]).i] = o.x(t);
      return s2.join("");
    });
  }

  // node_modules/d3-interpolate/src/transform/decompose.js
  var degrees = 180 / Math.PI;
  var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function decompose_default(a2, b, c3, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a2 * a2 + b * b))
      a2 /= scaleX, b /= scaleX;
    if (skewX = a2 * c3 + b * d)
      c3 -= a2 * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c3 * c3 + d * d))
      c3 /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a2 * d < b * c3)
      a2 = -a2, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a2) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX,
      scaleY
    };
  }

  // node_modules/d3-interpolate/src/transform/parse.js
  var cssNode;
  var cssRoot;
  var cssView;
  var svgNode;
  function parseCss(value) {
    if (value === "none")
      return identity;
    if (!cssNode)
      cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
    cssNode.style.transform = value;
    value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
    cssRoot.removeChild(cssNode);
    value = value.slice(7, -1).split(",");
    return decompose_default(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
  }
  function parseSvg(value) {
    if (value == null)
      return identity;
    if (!svgNode)
      svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate()))
      return identity;
    value = value.matrix;
    return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  // node_modules/d3-interpolate/src/transform/index.js
  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s2) {
      return s2.length ? s2.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s2, q) {
      if (xa !== xb || ya !== yb) {
        var i = s2.push("translate(", null, pxComma, null, pxParen);
        q.push({ i: i - 4, x: number_default2(xa, xb) }, { i: i - 2, x: number_default2(ya, yb) });
      } else if (xb || yb) {
        s2.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate(a2, b, s2, q) {
      if (a2 !== b) {
        if (a2 - b > 180)
          b += 360;
        else if (b - a2 > 180)
          a2 += 360;
        q.push({ i: s2.push(pop(s2) + "rotate(", null, degParen) - 2, x: number_default2(a2, b) });
      } else if (b) {
        s2.push(pop(s2) + "rotate(" + b + degParen);
      }
    }
    function skewX(a2, b, s2, q) {
      if (a2 !== b) {
        q.push({ i: s2.push(pop(s2) + "skewX(", null, degParen) - 2, x: number_default2(a2, b) });
      } else if (b) {
        s2.push(pop(s2) + "skewX(" + b + degParen);
      }
    }
    function scale(xa, ya, xb, yb, s2, q) {
      if (xa !== xb || ya !== yb) {
        var i = s2.push(pop(s2) + "scale(", null, ",", null, ")");
        q.push({ i: i - 4, x: number_default2(xa, xb) }, { i: i - 2, x: number_default2(ya, yb) });
      } else if (xb !== 1 || yb !== 1) {
        s2.push(pop(s2) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function(a2, b) {
      var s2 = [], q = [];
      a2 = parse(a2), b = parse(b);
      translate(a2.translateX, a2.translateY, b.translateX, b.translateY, s2, q);
      rotate(a2.rotate, b.rotate, s2, q);
      skewX(a2.skewX, b.skewX, s2, q);
      scale(a2.scaleX, a2.scaleY, b.scaleX, b.scaleY, s2, q);
      a2 = b = null;
      return function(t) {
        var i = -1, n = q.length, o;
        while (++i < n)
          s2[(o = q[i]).i] = o.x(t);
        return s2.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  // node_modules/d3-interpolate/src/hsl.js
  function hsl2(hue2) {
    return function(start2, end) {
      var h = hue2((start2 = hsl(start2)).h, (end = hsl(end)).h), s2 = nogamma(start2.s, end.s), l = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.h = h(t);
        start2.s = s2(t);
        start2.l = l(t);
        start2.opacity = opacity(t);
        return start2 + "";
      };
    };
  }
  var hsl_default = hsl2(hue);
  var hslLong = hsl2(nogamma);

  // node_modules/d3-interpolate/src/hcl.js
  function hcl2(hue2) {
    return function(start2, end) {
      var h = hue2((start2 = hcl(start2)).h, (end = hcl(end)).h), c3 = nogamma(start2.c, end.c), l = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.h = h(t);
        start2.c = c3(t);
        start2.l = l(t);
        start2.opacity = opacity(t);
        return start2 + "";
      };
    };
  }
  var hcl_default = hcl2(hue);
  var hclLong = hcl2(nogamma);

  // node_modules/d3-interpolate/src/cubehelix.js
  function cubehelix2(hue2) {
    return function cubehelixGamma(y4) {
      y4 = +y4;
      function cubehelix3(start2, end) {
        var h = hue2((start2 = cubehelix(start2)).h, (end = cubehelix(end)).h), s2 = nogamma(start2.s, end.s), l = nogamma(start2.l, end.l), opacity = nogamma(start2.opacity, end.opacity);
        return function(t) {
          start2.h = h(t);
          start2.s = s2(t);
          start2.l = l(Math.pow(t, y4));
          start2.opacity = opacity(t);
          return start2 + "";
        };
      }
      cubehelix3.gamma = cubehelixGamma;
      return cubehelix3;
    }(1);
  }
  var cubehelix_default = cubehelix2(hue);
  var cubehelixLong = cubehelix2(nogamma);

  // node_modules/d3-timer/src/timer.js
  var frame = 0;
  var timeout = 0;
  var interval = 0;
  var pokeDelay = 1e3;
  var taskHead;
  var taskTail;
  var clockLast = 0;
  var clockNow = 0;
  var clockSkew = 0;
  var clock = typeof performance === "object" && performance.now ? performance : Date;
  var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
  };
  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }
  function clearNow() {
    clockNow = 0;
  }
  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function")
        throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail)
          taskTail._next = this;
        else
          taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time) {
    var t = new Timer();
    t.restart(callback, delay, time);
    return t;
  }
  function timerFlush() {
    now();
    ++frame;
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0)
        t._call.call(null, e);
      t = t._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now2 = clock.now(), delay = now2 - clockLast;
    if (delay > pokeDelay)
      clockSkew -= delay, clockLast = now2;
  }
  function nap() {
    var t03, t13 = taskHead, t22, time = Infinity;
    while (t13) {
      if (t13._call) {
        if (time > t13._time)
          time = t13._time;
        t03 = t13, t13 = t13._next;
      } else {
        t22 = t13._next, t13._next = null;
        t13 = t03 ? t03._next = t22 : taskHead = t22;
      }
    }
    taskTail = t03;
    sleep(time);
  }
  function sleep(time) {
    if (frame)
      return;
    if (timeout)
      timeout = clearTimeout(timeout);
    var delay = time - clockNow;
    if (delay > 24) {
      if (time < Infinity)
        timeout = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval)
        interval = clearInterval(interval);
    } else {
      if (!interval)
        clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  // node_modules/d3-timer/src/timeout.js
  function timeout_default(callback, delay, time) {
    var t = new Timer();
    delay = delay == null ? 0 : +delay;
    t.restart(function(elapsed) {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }

  // node_modules/d3-transition/src/transition/schedule.js
  var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  function schedule_default(node, name, id2, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules)
      node.__transition = {};
    else if (id2 in schedules)
      return;
    create(node, id2, {
      name,
      index,
      // For context during callback.
      group,
      // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }
  function init(node, id2) {
    var schedule = get2(node, id2);
    if (schedule.state > CREATED)
      throw new Error("too late; already scheduled");
    return schedule;
  }
  function set2(node, id2) {
    var schedule = get2(node, id2);
    if (schedule.state > STARTED)
      throw new Error("too late; already running");
    return schedule;
  }
  function get2(node, id2) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id2]))
      throw new Error("transition not found");
    return schedule;
  }
  function create(node, id2, self) {
    var schedules = node.__transition, tween;
    schedules[id2] = self;
    self.timer = timer(schedule, 0, self.time);
    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start2, self.delay, self.time);
      if (self.delay <= elapsed)
        start2(elapsed - self.delay);
    }
    function start2(elapsed) {
      var i, j, n, o;
      if (self.state !== SCHEDULED)
        return stop();
      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name)
          continue;
        if (o.state === STARTED)
          return timeout_default(start2);
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        } else if (+i < id2) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      }
      timeout_default(function() {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING)
        return;
      self.state = STARTED;
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }
    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
      while (++i < n) {
        tween[i].call(node, t);
      }
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }
    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id2];
      for (var i in schedules)
        return;
      delete node.__transition;
    }
  }

  // node_modules/d3-transition/src/interrupt.js
  function interrupt_default(node, name) {
    var schedules = node.__transition, schedule, active, empty2 = true, i;
    if (!schedules)
      return;
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) {
        empty2 = false;
        continue;
      }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }
    if (empty2)
      delete node.__transition;
  }

  // node_modules/d3-transition/src/selection/interrupt.js
  function interrupt_default2(name) {
    return this.each(function() {
      interrupt_default(this, name);
    });
  }

  // node_modules/d3-transition/src/transition/tween.js
  function tweenRemove(id2, name) {
    var tween0, tween1;
    return function() {
      var schedule = set2(this, id2), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }
      schedule.tween = tween1;
    };
  }
  function tweenFunction(id2, name, value) {
    var tween0, tween1;
    if (typeof value !== "function")
      throw new Error();
    return function() {
      var schedule = set2(this, id2), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n)
          tween1.push(t);
      }
      schedule.tween = tween1;
    };
  }
  function tween_default(name, value) {
    var id2 = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get2(this.node(), id2).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
  }
  function tweenValue(transition2, name, value) {
    var id2 = transition2._id;
    transition2.each(function() {
      var schedule = set2(this, id2);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
      return get2(node, id2).value[name];
    };
  }

  // node_modules/d3-transition/src/transition/interpolate.js
  function interpolate_default(a2, b) {
    var c3;
    return (typeof b === "number" ? number_default2 : b instanceof color ? rgb_default : (c3 = color(b)) ? (b = c3, rgb_default) : string_default)(a2, b);
  }

  // node_modules/d3-transition/src/transition/attr.js
  function attrRemove2(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS2(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrConstantNS2(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null)
        return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attrFunctionNS2(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null)
        return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attr_default2(name, value) {
    var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
  }

  // node_modules/d3-transition/src/transition/attrTween.js
  function attrInterpolate(name, i) {
    return function(t) {
      this.setAttribute(name, i(t));
    };
  }
  function attrInterpolateNS(fullname, i) {
    return function(t) {
      this.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  function attrTweenNS(fullname, value) {
    var t03, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t03 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t03;
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    var t03, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t03 = (i0 = i) && attrInterpolate(name, i);
      return t03;
    }
    tween._value = value;
    return tween;
  }
  function attrTween_default(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    var fullname = namespace_default(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  // node_modules/d3-transition/src/transition/delay.js
  function delayFunction(id2, value) {
    return function() {
      init(this, id2).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id2, value) {
    return value = +value, function() {
      init(this, id2).delay = value;
    };
  }
  function delay_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
  }

  // node_modules/d3-transition/src/transition/duration.js
  function durationFunction(id2, value) {
    return function() {
      set2(this, id2).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id2, value) {
    return value = +value, function() {
      set2(this, id2).duration = value;
    };
  }
  function duration_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
  }

  // node_modules/d3-transition/src/transition/ease.js
  function easeConstant(id2, value) {
    if (typeof value !== "function")
      throw new Error();
    return function() {
      set2(this, id2).ease = value;
    };
  }
  function ease_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
  }

  // node_modules/d3-transition/src/transition/filter.js
  function filter_default2(match) {
    if (typeof match !== "function")
      match = matcher_default(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/merge.js
  function merge_default3(transition2) {
    if (transition2._id !== this._id)
      throw new Error();
    for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/on.js
  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
      var i = t.indexOf(".");
      if (i >= 0)
        t = t.slice(0, i);
      return !t || t === "start";
    });
  }
  function onFunction(id2, name, listener) {
    var on0, on1, sit = start(name) ? init : set2;
    return function() {
      var schedule = sit(this, id2), on = schedule.on;
      if (on !== on0)
        (on1 = (on0 = on).copy()).on(name, listener);
      schedule.on = on1;
    };
  }
  function on_default2(name, listener) {
    var id2 = this._id;
    return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
  }

  // node_modules/d3-transition/src/transition/remove.js
  function removeFunction(id2) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition)
        if (+i !== id2)
          return;
      if (parent)
        parent.removeChild(this);
    };
  }
  function remove_default2() {
    return this.on("end.remove", removeFunction(this._id));
  }

  // node_modules/d3-transition/src/transition/select.js
  function select_default3(select) {
    var name = this._name, id2 = this._id;
    if (typeof select !== "function")
      select = selector_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node)
            subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selectAll.js
  function selectAll_default3(select) {
    var name = this._name, id2 = this._id;
    if (typeof select !== "function")
      select = selectorAll_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k2 = 0, l = children.length; k2 < l; ++k2) {
            if (child = children[k2]) {
              schedule_default(child, name, id2, k2, children, inherit2);
            }
          }
          subgroups.push(children);
          parents.push(node);
        }
      }
    }
    return new Transition(subgroups, parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selection.js
  var Selection2 = selection_default.prototype.constructor;
  function selection_default2() {
    return new Selection2(this._groups, this._parents);
  }

  // node_modules/d3-transition/src/transition/style.js
  function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }
  function styleRemove2(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function styleFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
      if (value1 == null)
        string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function styleMaybeRemove(id2, name) {
    var on0, on1, listener0, key = "style." + name, event2 = "end." + key, remove2;
    return function() {
      var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
      if (on !== on0 || listener0 !== listener)
        (on1 = (on0 = on).copy()).on(event2, listener0 = listener);
      schedule.on = on1;
    };
  }
  function style_default2(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
  }

  // node_modules/d3-transition/src/transition/styleTween.js
  function styleInterpolate(name, i, priority) {
    return function(t) {
      this.style.setProperty(name, i(t), priority);
    };
  }
  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }
  function styleTween_default(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  // node_modules/d3-transition/src/transition/text.js
  function textConstant2(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction2(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  function text_default2(value) {
    return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
  }

  // node_modules/d3-transition/src/transition/transition.js
  function transition_default() {
    var name = this._name, id0 = this._id, id1 = newId();
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit2 = get2(node, id0);
          schedule_default(node, name, id1, i, group, {
            time: inherit2.time + inherit2.delay + inherit2.duration,
            delay: 0,
            duration: inherit2.duration,
            ease: inherit2.ease
          });
        }
      }
    }
    return new Transition(groups, this._parents, name, id1);
  }

  // node_modules/d3-transition/src/transition/end.js
  function end_default() {
    var on0, on1, that = this, id2 = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = { value: reject }, end = { value: function() {
        if (--size === 0)
          resolve();
      } };
      that.each(function() {
        var schedule = set2(this, id2), on = schedule.on;
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }
        schedule.on = on1;
      });
    });
  }

  // node_modules/d3-transition/src/transition/index.js
  var id = 0;
  function Transition(groups, parents, name, id2) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id2;
  }
  function transition(name) {
    return selection_default().transition(name);
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = selection_default.prototype;
  Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: select_default3,
    selectAll: selectAll_default3,
    filter: filter_default2,
    merge: merge_default3,
    selection: selection_default2,
    transition: transition_default,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: on_default2,
    attr: attr_default2,
    attrTween: attrTween_default,
    style: style_default2,
    styleTween: styleTween_default,
    text: text_default2,
    remove: remove_default2,
    tween: tween_default,
    delay: delay_default,
    duration: duration_default,
    ease: ease_default,
    end: end_default
  };

  // node_modules/d3-ease/src/cubic.js
  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  // node_modules/d3-ease/src/poly.js
  var exponent = 3;
  var polyIn = function custom(e) {
    e = +e;
    function polyIn2(t) {
      return Math.pow(t, e);
    }
    polyIn2.exponent = custom;
    return polyIn2;
  }(exponent);
  var polyOut = function custom2(e) {
    e = +e;
    function polyOut2(t) {
      return 1 - Math.pow(1 - t, e);
    }
    polyOut2.exponent = custom2;
    return polyOut2;
  }(exponent);
  var polyInOut = function custom3(e) {
    e = +e;
    function polyInOut2(t) {
      return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
    }
    polyInOut2.exponent = custom3;
    return polyInOut2;
  }(exponent);

  // node_modules/d3-ease/src/sin.js
  var pi = Math.PI;
  var halfPi = pi / 2;

  // node_modules/d3-ease/src/bounce.js
  var b1 = 4 / 11;
  var b2 = 6 / 11;
  var b3 = 8 / 11;
  var b4 = 3 / 4;
  var b5 = 9 / 11;
  var b6 = 10 / 11;
  var b7 = 15 / 16;
  var b8 = 21 / 22;
  var b9 = 63 / 64;
  var b0 = 1 / b1 / b1;

  // node_modules/d3-ease/src/back.js
  var overshoot = 1.70158;
  var backIn = function custom4(s2) {
    s2 = +s2;
    function backIn2(t) {
      return t * t * ((s2 + 1) * t - s2);
    }
    backIn2.overshoot = custom4;
    return backIn2;
  }(overshoot);
  var backOut = function custom5(s2) {
    s2 = +s2;
    function backOut2(t) {
      return --t * t * ((s2 + 1) * t + s2) + 1;
    }
    backOut2.overshoot = custom5;
    return backOut2;
  }(overshoot);
  var backInOut = function custom6(s2) {
    s2 = +s2;
    function backInOut2(t) {
      return ((t *= 2) < 1 ? t * t * ((s2 + 1) * t - s2) : (t -= 2) * t * ((s2 + 1) * t + s2) + 2) / 2;
    }
    backInOut2.overshoot = custom6;
    return backInOut2;
  }(overshoot);

  // node_modules/d3-ease/src/elastic.js
  var tau = 2 * Math.PI;
  var amplitude = 1;
  var period = 0.3;
  var elasticIn = function custom7(a2, p) {
    var s2 = Math.asin(1 / (a2 = Math.max(1, a2))) * (p /= tau);
    function elasticIn2(t) {
      return a2 * Math.pow(2, 10 * --t) * Math.sin((s2 - t) / p);
    }
    elasticIn2.amplitude = function(a3) {
      return custom7(a3, p * tau);
    };
    elasticIn2.period = function(p2) {
      return custom7(a2, p2);
    };
    return elasticIn2;
  }(amplitude, period);
  var elasticOut = function custom8(a2, p) {
    var s2 = Math.asin(1 / (a2 = Math.max(1, a2))) * (p /= tau);
    function elasticOut2(t) {
      return 1 - a2 * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s2) / p);
    }
    elasticOut2.amplitude = function(a3) {
      return custom8(a3, p * tau);
    };
    elasticOut2.period = function(p2) {
      return custom8(a2, p2);
    };
    return elasticOut2;
  }(amplitude, period);
  var elasticInOut = function custom9(a2, p) {
    var s2 = Math.asin(1 / (a2 = Math.max(1, a2))) * (p /= tau);
    function elasticInOut2(t) {
      return ((t = t * 2 - 1) < 0 ? a2 * Math.pow(2, 10 * t) * Math.sin((s2 - t) / p) : 2 - a2 * Math.pow(2, -10 * t) * Math.sin((s2 + t) / p)) / 2;
    }
    elasticInOut2.amplitude = function(a3) {
      return custom9(a3, p * tau);
    };
    elasticInOut2.period = function(p2) {
      return custom9(a2, p2);
    };
    return elasticInOut2;
  }(amplitude, period);

  // node_modules/d3-transition/src/selection/transition.js
  var defaultTiming = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };
  function inherit(node, id2) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id2])) {
      if (!(node = node.parentNode)) {
        return defaultTiming.time = now(), defaultTiming;
      }
    }
    return timing;
  }
  function transition_default2(name) {
    var id2, timing;
    if (name instanceof Transition) {
      id2 = name._id, name = name._name;
    } else {
      id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
        }
      }
    }
    return new Transition(groups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/selection/index.js
  selection_default.prototype.interrupt = interrupt_default2;
  selection_default.prototype.transition = transition_default2;

  // node_modules/d3-brush/src/brush.js
  var X = {
    name: "x",
    handles: ["e", "w"].map(type),
    input: function(x4, e) {
      return x4 && [[x4[0], e[0][1]], [x4[1], e[1][1]]];
    },
    output: function(xy) {
      return xy && [xy[0][0], xy[1][0]];
    }
  };
  var Y = {
    name: "y",
    handles: ["n", "s"].map(type),
    input: function(y4, e) {
      return y4 && [[e[0][0], y4[0]], [e[1][0], y4[1]]];
    },
    output: function(xy) {
      return xy && [xy[0][1], xy[1][1]];
    }
  };
  var XY = {
    name: "xy",
    handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(type),
    input: function(xy) {
      return xy;
    },
    output: function(xy) {
      return xy;
    }
  };
  function type(t) {
    return { type: t };
  }

  // node_modules/d3-chord/src/math.js
  var pi2 = Math.PI;
  var halfPi2 = pi2 / 2;
  var tau2 = pi2 * 2;

  // node_modules/d3-chord/src/array.js
  var slice3 = Array.prototype.slice;

  // node_modules/d3-path/src/path.js
  var pi3 = Math.PI;
  var tau3 = 2 * pi3;
  var epsilon = 1e-6;
  var tauEpsilon = tau3 - epsilon;
  function Path() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
  }
  function path() {
    return new Path();
  }
  Path.prototype = path.prototype = {
    constructor: Path,
    moveTo: function(x4, y4) {
      this._ += "M" + (this._x0 = this._x1 = +x4) + "," + (this._y0 = this._y1 = +y4);
    },
    closePath: function() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._ += "Z";
      }
    },
    lineTo: function(x4, y4) {
      this._ += "L" + (this._x1 = +x4) + "," + (this._y1 = +y4);
    },
    quadraticCurveTo: function(x12, y1, x4, y4) {
      this._ += "Q" + +x12 + "," + +y1 + "," + (this._x1 = +x4) + "," + (this._y1 = +y4);
    },
    bezierCurveTo: function(x12, y1, x22, y22, x4, y4) {
      this._ += "C" + +x12 + "," + +y1 + "," + +x22 + "," + +y22 + "," + (this._x1 = +x4) + "," + (this._y1 = +y4);
    },
    arcTo: function(x12, y1, x22, y22, r) {
      x12 = +x12, y1 = +y1, x22 = +x22, y22 = +y22, r = +r;
      var x02 = this._x1, y0 = this._y1, x21 = x22 - x12, y21 = y22 - y1, x01 = x02 - x12, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
      if (r < 0)
        throw new Error("negative radius: " + r);
      if (this._x1 === null) {
        this._ += "M" + (this._x1 = x12) + "," + (this._y1 = y1);
      } else if (!(l01_2 > epsilon))
        ;
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
        this._ += "L" + (this._x1 = x12) + "," + (this._y1 = y1);
      } else {
        var x20 = x22 - x02, y20 = y22 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi3 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
        if (Math.abs(t01 - 1) > epsilon) {
          this._ += "L" + (x12 + t01 * x01) + "," + (y1 + t01 * y01);
        }
        this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x12 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
      }
    },
    arc: function(x4, y4, r, a0, a1, ccw) {
      x4 = +x4, y4 = +y4, r = +r;
      var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x02 = x4 + dx, y0 = y4 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
      if (r < 0)
        throw new Error("negative radius: " + r);
      if (this._x1 === null) {
        this._ += "M" + x02 + "," + y0;
      } else if (Math.abs(this._x1 - x02) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._ += "L" + x02 + "," + y0;
      }
      if (!r)
        return;
      if (da < 0)
        da = da % tau3 + tau3;
      if (da > tauEpsilon) {
        this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x4 - dx) + "," + (y4 - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x02) + "," + (this._y1 = y0);
      } else if (da > epsilon) {
        this._ += "A" + r + "," + r + ",0," + +(da >= pi3) + "," + cw + "," + (this._x1 = x4 + r * Math.cos(a1)) + "," + (this._y1 = y4 + r * Math.sin(a1));
      }
    },
    rect: function(x4, y4, w, h) {
      this._ += "M" + (this._x0 = this._x1 = +x4) + "," + (this._y0 = this._y1 = +y4) + "h" + +w + "v" + +h + "h" + -w + "Z";
    },
    toString: function() {
      return this._;
    }
  };
  var path_default = path;

  // node_modules/d3-collection/src/map.js
  var prefix = "$";
  function Map() {
  }
  Map.prototype = map2.prototype = {
    constructor: Map,
    has: function(key) {
      return prefix + key in this;
    },
    get: function(key) {
      return this[prefix + key];
    },
    set: function(key, value) {
      this[prefix + key] = value;
      return this;
    },
    remove: function(key) {
      var property = prefix + key;
      return property in this && delete this[property];
    },
    clear: function() {
      for (var property in this)
        if (property[0] === prefix)
          delete this[property];
    },
    keys: function() {
      var keys = [];
      for (var property in this)
        if (property[0] === prefix)
          keys.push(property.slice(1));
      return keys;
    },
    values: function() {
      var values = [];
      for (var property in this)
        if (property[0] === prefix)
          values.push(this[property]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var property in this)
        if (property[0] === prefix)
          entries.push({ key: property.slice(1), value: this[property] });
      return entries;
    },
    size: function() {
      var size = 0;
      for (var property in this)
        if (property[0] === prefix)
          ++size;
      return size;
    },
    empty: function() {
      for (var property in this)
        if (property[0] === prefix)
          return false;
      return true;
    },
    each: function(f) {
      for (var property in this)
        if (property[0] === prefix)
          f(this[property], property.slice(1), this);
    }
  };
  function map2(object, f) {
    var map4 = new Map();
    if (object instanceof Map)
      object.each(function(value, key2) {
        map4.set(key2, value);
      });
    else if (Array.isArray(object)) {
      var i = -1, n = object.length, o;
      if (f == null)
        while (++i < n)
          map4.set(i, object[i]);
      else
        while (++i < n)
          map4.set(f(o = object[i], i, object), o);
    } else if (object)
      for (var key in object)
        map4.set(key, object[key]);
    return map4;
  }
  var map_default = map2;

  // node_modules/d3-collection/src/set.js
  function Set() {
  }
  var proto = map_default.prototype;
  Set.prototype = set3.prototype = {
    constructor: Set,
    has: proto.has,
    add: function(value) {
      value += "";
      this[prefix + value] = value;
      return this;
    },
    remove: proto.remove,
    clear: proto.clear,
    values: proto.keys,
    size: proto.size,
    empty: proto.empty,
    each: proto.each
  };
  function set3(object, f) {
    var set4 = new Set();
    if (object instanceof Set)
      object.each(function(value) {
        set4.add(value);
      });
    else if (object) {
      var i = -1, n = object.length;
      if (f == null)
        while (++i < n)
          set4.add(object[i]);
      else
        while (++i < n)
          set4.add(f(object[i], i, object));
    }
    return set4;
  }

  // node_modules/d3-contour/src/array.js
  var array2 = Array.prototype;
  var slice4 = array2.slice;

  // node_modules/d3-dsv/src/dsv.js
  var EOL = {};
  var EOF = {};
  var QUOTE = 34;
  var NEWLINE = 10;
  var RETURN = 13;
  function objectConverter(columns) {
    return new Function("d", "return {" + columns.map(function(name, i) {
      return JSON.stringify(name) + ": d[" + i + "]";
    }).join(",") + "}");
  }
  function customConverter(columns, f) {
    var object = objectConverter(columns);
    return function(row, i) {
      return f(object(row), i, columns);
    };
  }
  function inferColumns(rows) {
    var columnSet = /* @__PURE__ */ Object.create(null), columns = [];
    rows.forEach(function(row) {
      for (var column in row) {
        if (!(column in columnSet)) {
          columns.push(columnSet[column] = column);
        }
      }
    });
    return columns;
  }
  function pad(value, width) {
    var s2 = value + "", length = s2.length;
    return length < width ? new Array(width - length + 1).join(0) + s2 : s2;
  }
  function formatYear(year2) {
    return year2 < 0 ? "-" + pad(-year2, 6) : year2 > 9999 ? "+" + pad(year2, 6) : pad(year2, 4);
  }
  function formatDate(date) {
    var hours2 = date.getUTCHours(), minutes2 = date.getUTCMinutes(), seconds2 = date.getUTCSeconds(), milliseconds2 = date.getUTCMilliseconds();
    return isNaN(date) ? "Invalid Date" : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2) + (milliseconds2 ? "T" + pad(hours2, 2) + ":" + pad(minutes2, 2) + ":" + pad(seconds2, 2) + "." + pad(milliseconds2, 3) + "Z" : seconds2 ? "T" + pad(hours2, 2) + ":" + pad(minutes2, 2) + ":" + pad(seconds2, 2) + "Z" : minutes2 || hours2 ? "T" + pad(hours2, 2) + ":" + pad(minutes2, 2) + "Z" : "");
  }
  function dsv_default(delimiter) {
    var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
    function parse(text, f) {
      var convert, columns, rows = parseRows(text, function(row, i) {
        if (convert)
          return convert(row, i - 1);
        columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
      });
      rows.columns = columns || [];
      return rows;
    }
    function parseRows(text, f) {
      var rows = [], N = text.length, I = 0, n = 0, t, eof = N <= 0, eol = false;
      if (text.charCodeAt(N - 1) === NEWLINE)
        --N;
      if (text.charCodeAt(N - 1) === RETURN)
        --N;
      function token() {
        if (eof)
          return EOF;
        if (eol)
          return eol = false, EOL;
        var i, j = I, c3;
        if (text.charCodeAt(j) === QUOTE) {
          while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE)
            ;
          if ((i = I) >= N)
            eof = true;
          else if ((c3 = text.charCodeAt(I++)) === NEWLINE)
            eol = true;
          else if (c3 === RETURN) {
            eol = true;
            if (text.charCodeAt(I) === NEWLINE)
              ++I;
          }
          return text.slice(j + 1, i - 1).replace(/""/g, '"');
        }
        while (I < N) {
          if ((c3 = text.charCodeAt(i = I++)) === NEWLINE)
            eol = true;
          else if (c3 === RETURN) {
            eol = true;
            if (text.charCodeAt(I) === NEWLINE)
              ++I;
          } else if (c3 !== DELIMITER)
            continue;
          return text.slice(j, i);
        }
        return eof = true, text.slice(j, N);
      }
      while ((t = token()) !== EOF) {
        var row = [];
        while (t !== EOL && t !== EOF)
          row.push(t), t = token();
        if (f && (row = f(row, n++)) == null)
          continue;
        rows.push(row);
      }
      return rows;
    }
    function preformatBody(rows, columns) {
      return rows.map(function(row) {
        return columns.map(function(column) {
          return formatValue(row[column]);
        }).join(delimiter);
      });
    }
    function format2(rows, columns) {
      if (columns == null)
        columns = inferColumns(rows);
      return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
    }
    function formatBody(rows, columns) {
      if (columns == null)
        columns = inferColumns(rows);
      return preformatBody(rows, columns).join("\n");
    }
    function formatRows(rows) {
      return rows.map(formatRow).join("\n");
    }
    function formatRow(row) {
      return row.map(formatValue).join(delimiter);
    }
    function formatValue(value) {
      return value == null ? "" : value instanceof Date ? formatDate(value) : reFormat.test(value += "") ? '"' + value.replace(/"/g, '""') + '"' : value;
    }
    return {
      parse,
      parseRows,
      format: format2,
      formatBody,
      formatRows
    };
  }

  // node_modules/d3-dsv/src/csv.js
  var csv = dsv_default(",");
  var csvParse = csv.parse;
  var csvParseRows = csv.parseRows;
  var csvFormat = csv.format;
  var csvFormatBody = csv.formatBody;
  var csvFormatRows = csv.formatRows;

  // node_modules/d3-dsv/src/tsv.js
  var tsv = dsv_default("	");
  var tsvParse = tsv.parse;
  var tsvParseRows = tsv.parseRows;
  var tsvFormat = tsv.format;
  var tsvFormatBody = tsv.formatBody;
  var tsvFormatRows = tsv.formatRows;

  // node_modules/d3-fetch/src/text.js
  function responseText(response) {
    if (!response.ok)
      throw new Error(response.status + " " + response.statusText);
    return response.text();
  }
  function text_default3(input, init2) {
    return fetch(input, init2).then(responseText);
  }

  // node_modules/d3-fetch/src/dsv.js
  function dsvParse(parse) {
    return function(input, init2, row) {
      if (arguments.length === 2 && typeof init2 === "function")
        row = init2, init2 = void 0;
      return text_default3(input, init2).then(function(response) {
        return parse(response, row);
      });
    };
  }
  var csv2 = dsvParse(csvParse);
  var tsv2 = dsvParse(tsvParse);

  // node_modules/d3-fetch/src/xml.js
  function parser(type2) {
    return function(input, init2) {
      return text_default3(input, init2).then(function(text) {
        return new DOMParser().parseFromString(text, type2);
      });
    };
  }
  var xml_default = parser("application/xml");
  var html = parser("text/html");
  var svg = parser("image/svg+xml");

  // node_modules/d3-quadtree/src/add.js
  function add_default(d) {
    var x4 = +this._x.call(null, d), y4 = +this._y.call(null, d);
    return add(this.cover(x4, y4), x4, y4, d);
  }
  function add(tree, x4, y4, d) {
    if (isNaN(x4) || isNaN(y4))
      return tree;
    var parent, node = tree._root, leaf = { data: d }, x02 = tree._x0, y0 = tree._y0, x12 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i, j;
    if (!node)
      return tree._root = leaf, tree;
    while (node.length) {
      if (right = x4 >= (xm = (x02 + x12) / 2))
        x02 = xm;
      else
        x12 = xm;
      if (bottom = y4 >= (ym = (y0 + y1) / 2))
        y0 = ym;
      else
        y1 = ym;
      if (parent = node, !(node = node[i = bottom << 1 | right]))
        return parent[i] = leaf, tree;
    }
    xp = +tree._x.call(null, node.data);
    yp = +tree._y.call(null, node.data);
    if (x4 === xp && y4 === yp)
      return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
    do {
      parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
      if (right = x4 >= (xm = (x02 + x12) / 2))
        x02 = xm;
      else
        x12 = xm;
      if (bottom = y4 >= (ym = (y0 + y1) / 2))
        y0 = ym;
      else
        y1 = ym;
    } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
    return parent[j] = node, parent[i] = leaf, tree;
  }
  function addAll(data) {
    var d, i, n = data.length, x4, y4, xz = new Array(n), yz = new Array(n), x02 = Infinity, y0 = Infinity, x12 = -Infinity, y1 = -Infinity;
    for (i = 0; i < n; ++i) {
      if (isNaN(x4 = +this._x.call(null, d = data[i])) || isNaN(y4 = +this._y.call(null, d)))
        continue;
      xz[i] = x4;
      yz[i] = y4;
      if (x4 < x02)
        x02 = x4;
      if (x4 > x12)
        x12 = x4;
      if (y4 < y0)
        y0 = y4;
      if (y4 > y1)
        y1 = y4;
    }
    if (x02 > x12 || y0 > y1)
      return this;
    this.cover(x02, y0).cover(x12, y1);
    for (i = 0; i < n; ++i) {
      add(this, xz[i], yz[i], data[i]);
    }
    return this;
  }

  // node_modules/d3-quadtree/src/cover.js
  function cover_default(x4, y4) {
    if (isNaN(x4 = +x4) || isNaN(y4 = +y4))
      return this;
    var x02 = this._x0, y0 = this._y0, x12 = this._x1, y1 = this._y1;
    if (isNaN(x02)) {
      x12 = (x02 = Math.floor(x4)) + 1;
      y1 = (y0 = Math.floor(y4)) + 1;
    } else {
      var z = x12 - x02, node = this._root, parent, i;
      while (x02 > x4 || x4 >= x12 || y0 > y4 || y4 >= y1) {
        i = (y4 < y0) << 1 | x4 < x02;
        parent = new Array(4), parent[i] = node, node = parent, z *= 2;
        switch (i) {
          case 0:
            x12 = x02 + z, y1 = y0 + z;
            break;
          case 1:
            x02 = x12 - z, y1 = y0 + z;
            break;
          case 2:
            x12 = x02 + z, y0 = y1 - z;
            break;
          case 3:
            x02 = x12 - z, y0 = y1 - z;
            break;
        }
      }
      if (this._root && this._root.length)
        this._root = node;
    }
    this._x0 = x02;
    this._y0 = y0;
    this._x1 = x12;
    this._y1 = y1;
    return this;
  }

  // node_modules/d3-quadtree/src/data.js
  function data_default2() {
    var data = [];
    this.visit(function(node) {
      if (!node.length)
        do
          data.push(node.data);
        while (node = node.next);
    });
    return data;
  }

  // node_modules/d3-quadtree/src/extent.js
  function extent_default2(_) {
    return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
  }

  // node_modules/d3-quadtree/src/quad.js
  function quad_default(node, x02, y0, x12, y1) {
    this.node = node;
    this.x0 = x02;
    this.y0 = y0;
    this.x1 = x12;
    this.y1 = y1;
  }

  // node_modules/d3-quadtree/src/find.js
  function find_default(x4, y4, radius) {
    var data, x02 = this._x0, y0 = this._y0, x12, y1, x22, y22, x32 = this._x1, y32 = this._y1, quads = [], node = this._root, q, i;
    if (node)
      quads.push(new quad_default(node, x02, y0, x32, y32));
    if (radius == null)
      radius = Infinity;
    else {
      x02 = x4 - radius, y0 = y4 - radius;
      x32 = x4 + radius, y32 = y4 + radius;
      radius *= radius;
    }
    while (q = quads.pop()) {
      if (!(node = q.node) || (x12 = q.x0) > x32 || (y1 = q.y0) > y32 || (x22 = q.x1) < x02 || (y22 = q.y1) < y0)
        continue;
      if (node.length) {
        var xm = (x12 + x22) / 2, ym = (y1 + y22) / 2;
        quads.push(
          new quad_default(node[3], xm, ym, x22, y22),
          new quad_default(node[2], x12, ym, xm, y22),
          new quad_default(node[1], xm, y1, x22, ym),
          new quad_default(node[0], x12, y1, xm, ym)
        );
        if (i = (y4 >= ym) << 1 | x4 >= xm) {
          q = quads[quads.length - 1];
          quads[quads.length - 1] = quads[quads.length - 1 - i];
          quads[quads.length - 1 - i] = q;
        }
      } else {
        var dx = x4 - +this._x.call(null, node.data), dy = y4 - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
        if (d2 < radius) {
          var d = Math.sqrt(radius = d2);
          x02 = x4 - d, y0 = y4 - d;
          x32 = x4 + d, y32 = y4 + d;
          data = node.data;
        }
      }
    }
    return data;
  }

  // node_modules/d3-quadtree/src/remove.js
  function remove_default3(d) {
    if (isNaN(x4 = +this._x.call(null, d)) || isNaN(y4 = +this._y.call(null, d)))
      return this;
    var parent, node = this._root, retainer, previous, next, x02 = this._x0, y0 = this._y0, x12 = this._x1, y1 = this._y1, x4, y4, xm, ym, right, bottom, i, j;
    if (!node)
      return this;
    if (node.length)
      while (true) {
        if (right = x4 >= (xm = (x02 + x12) / 2))
          x02 = xm;
        else
          x12 = xm;
        if (bottom = y4 >= (ym = (y0 + y1) / 2))
          y0 = ym;
        else
          y1 = ym;
        if (!(parent = node, node = node[i = bottom << 1 | right]))
          return this;
        if (!node.length)
          break;
        if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3])
          retainer = parent, j = i;
      }
    while (node.data !== d)
      if (!(previous = node, node = node.next))
        return this;
    if (next = node.next)
      delete node.next;
    if (previous)
      return next ? previous.next = next : delete previous.next, this;
    if (!parent)
      return this._root = next, this;
    next ? parent[i] = next : delete parent[i];
    if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
      if (retainer)
        retainer[j] = node;
      else
        this._root = node;
    }
    return this;
  }
  function removeAll(data) {
    for (var i = 0, n = data.length; i < n; ++i)
      this.remove(data[i]);
    return this;
  }

  // node_modules/d3-quadtree/src/root.js
  function root_default() {
    return this._root;
  }

  // node_modules/d3-quadtree/src/size.js
  function size_default2() {
    var size = 0;
    this.visit(function(node) {
      if (!node.length)
        do
          ++size;
        while (node = node.next);
    });
    return size;
  }

  // node_modules/d3-quadtree/src/visit.js
  function visit_default(callback) {
    var quads = [], q, node = this._root, child, x02, y0, x12, y1;
    if (node)
      quads.push(new quad_default(node, this._x0, this._y0, this._x1, this._y1));
    while (q = quads.pop()) {
      if (!callback(node = q.node, x02 = q.x0, y0 = q.y0, x12 = q.x1, y1 = q.y1) && node.length) {
        var xm = (x02 + x12) / 2, ym = (y0 + y1) / 2;
        if (child = node[3])
          quads.push(new quad_default(child, xm, ym, x12, y1));
        if (child = node[2])
          quads.push(new quad_default(child, x02, ym, xm, y1));
        if (child = node[1])
          quads.push(new quad_default(child, xm, y0, x12, ym));
        if (child = node[0])
          quads.push(new quad_default(child, x02, y0, xm, ym));
      }
    }
    return this;
  }

  // node_modules/d3-quadtree/src/visitAfter.js
  function visitAfter_default(callback) {
    var quads = [], next = [], q;
    if (this._root)
      quads.push(new quad_default(this._root, this._x0, this._y0, this._x1, this._y1));
    while (q = quads.pop()) {
      var node = q.node;
      if (node.length) {
        var child, x02 = q.x0, y0 = q.y0, x12 = q.x1, y1 = q.y1, xm = (x02 + x12) / 2, ym = (y0 + y1) / 2;
        if (child = node[0])
          quads.push(new quad_default(child, x02, y0, xm, ym));
        if (child = node[1])
          quads.push(new quad_default(child, xm, y0, x12, ym));
        if (child = node[2])
          quads.push(new quad_default(child, x02, ym, xm, y1));
        if (child = node[3])
          quads.push(new quad_default(child, xm, ym, x12, y1));
      }
      next.push(q);
    }
    while (q = next.pop()) {
      callback(q.node, q.x0, q.y0, q.x1, q.y1);
    }
    return this;
  }

  // node_modules/d3-quadtree/src/x.js
  function defaultX(d) {
    return d[0];
  }
  function x_default(_) {
    return arguments.length ? (this._x = _, this) : this._x;
  }

  // node_modules/d3-quadtree/src/y.js
  function defaultY(d) {
    return d[1];
  }
  function y_default(_) {
    return arguments.length ? (this._y = _, this) : this._y;
  }

  // node_modules/d3-quadtree/src/quadtree.js
  function quadtree(nodes, x4, y4) {
    var tree = new Quadtree(x4 == null ? defaultX : x4, y4 == null ? defaultY : y4, NaN, NaN, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
  }
  function Quadtree(x4, y4, x02, y0, x12, y1) {
    this._x = x4;
    this._y = y4;
    this._x0 = x02;
    this._y0 = y0;
    this._x1 = x12;
    this._y1 = y1;
    this._root = void 0;
  }
  function leaf_copy(leaf) {
    var copy3 = { data: leaf.data }, next = copy3;
    while (leaf = leaf.next)
      next = next.next = { data: leaf.data };
    return copy3;
  }
  var treeProto = quadtree.prototype = Quadtree.prototype;
  treeProto.copy = function() {
    var copy3 = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
    if (!node)
      return copy3;
    if (!node.length)
      return copy3._root = leaf_copy(node), copy3;
    nodes = [{ source: node, target: copy3._root = new Array(4) }];
    while (node = nodes.pop()) {
      for (var i = 0; i < 4; ++i) {
        if (child = node.source[i]) {
          if (child.length)
            nodes.push({ source: child, target: node.target[i] = new Array(4) });
          else
            node.target[i] = leaf_copy(child);
        }
      }
    }
    return copy3;
  };
  treeProto.add = add_default;
  treeProto.addAll = addAll;
  treeProto.cover = cover_default;
  treeProto.data = data_default2;
  treeProto.extent = extent_default2;
  treeProto.find = find_default;
  treeProto.remove = remove_default3;
  treeProto.removeAll = removeAll;
  treeProto.root = root_default;
  treeProto.size = size_default2;
  treeProto.visit = visit_default;
  treeProto.visitAfter = visitAfter_default;
  treeProto.x = x_default;
  treeProto.y = y_default;

  // node_modules/d3-force/src/simulation.js
  var initialAngle = Math.PI * (3 - Math.sqrt(5));

  // node_modules/d3-format/src/formatDecimal.js
  function formatDecimal_default(x4, p) {
    if ((i = (x4 = p ? x4.toExponential(p - 1) : x4.toExponential()).indexOf("e")) < 0)
      return null;
    var i, coefficient = x4.slice(0, i);
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x4.slice(i + 1)
    ];
  }

  // node_modules/d3-format/src/exponent.js
  function exponent_default(x4) {
    return x4 = formatDecimal_default(Math.abs(x4)), x4 ? x4[1] : NaN;
  }

  // node_modules/d3-format/src/formatGroup.js
  function formatGroup_default(grouping, thousands) {
    return function(value, width) {
      var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width)
          g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width)
          break;
        g = grouping[j = (j + 1) % grouping.length];
      }
      return t.reverse().join(thousands);
    };
  }

  // node_modules/d3-format/src/formatNumerals.js
  function formatNumerals_default(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i) {
        return numerals[+i];
      });
    };
  }

  // node_modules/d3-format/src/formatSpecifier.js
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function formatSpecifier(specifier) {
    return new FormatSpecifier(specifier);
  }
  formatSpecifier.prototype = FormatSpecifier.prototype;
  function FormatSpecifier(specifier) {
    if (!(match = re.exec(specifier)))
      throw new Error("invalid format: " + specifier);
    var match;
    this.fill = match[1] || " ";
    this.align = match[2] || ">";
    this.sign = match[3] || "-";
    this.symbol = match[4] || "";
    this.zero = !!match[5];
    this.width = match[6] && +match[6];
    this.comma = !!match[7];
    this.precision = match[8] && +match[8].slice(1);
    this.trim = !!match[9];
    this.type = match[10] || "";
  }
  FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width == null ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };

  // node_modules/d3-format/src/formatTrim.js
  function formatTrim_default(s2) {
    out:
      for (var n = s2.length, i = 1, i0 = -1, i1; i < n; ++i) {
        switch (s2[i]) {
          case ".":
            i0 = i1 = i;
            break;
          case "0":
            if (i0 === 0)
              i0 = i;
            i1 = i;
            break;
          default:
            if (i0 > 0) {
              if (!+s2[i])
                break out;
              i0 = 0;
            }
            break;
        }
      }
    return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
  }

  // node_modules/d3-format/src/formatPrefixAuto.js
  var prefixExponent;
  function formatPrefixAuto_default(x4, p) {
    var d = formatDecimal_default(x4, p);
    if (!d)
      return x4 + "";
    var coefficient = d[0], exponent2 = d[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimal_default(x4, Math.max(0, p + i - 1))[0];
  }

  // node_modules/d3-format/src/formatRounded.js
  function formatRounded_default(x4, p) {
    var d = formatDecimal_default(x4, p);
    if (!d)
      return x4 + "";
    var coefficient = d[0], exponent2 = d[1];
    return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
  }

  // node_modules/d3-format/src/formatTypes.js
  var formatTypes_default = {
    "%": function(x4, p) {
      return (x4 * 100).toFixed(p);
    },
    "b": function(x4) {
      return Math.round(x4).toString(2);
    },
    "c": function(x4) {
      return x4 + "";
    },
    "d": function(x4) {
      return Math.round(x4).toString(10);
    },
    "e": function(x4, p) {
      return x4.toExponential(p);
    },
    "f": function(x4, p) {
      return x4.toFixed(p);
    },
    "g": function(x4, p) {
      return x4.toPrecision(p);
    },
    "o": function(x4) {
      return Math.round(x4).toString(8);
    },
    "p": function(x4, p) {
      return formatRounded_default(x4 * 100, p);
    },
    "r": formatRounded_default,
    "s": formatPrefixAuto_default,
    "X": function(x4) {
      return Math.round(x4).toString(16).toUpperCase();
    },
    "x": function(x4) {
      return Math.round(x4).toString(16);
    }
  };

  // node_modules/d3-format/src/identity.js
  function identity_default3(x4) {
    return x4;
  }

  // node_modules/d3-format/src/locale.js
  var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function locale_default(locale3) {
    var group = locale3.grouping && locale3.thousands ? formatGroup_default(locale3.grouping, locale3.thousands) : identity_default3, currency = locale3.currency, decimal = locale3.decimal, numerals = locale3.numerals ? formatNumerals_default(locale3.numerals) : identity_default3, percent = locale3.percent || "%";
    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);
      var fill = specifier.fill, align = specifier.align, sign3 = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type2 = specifier.type;
      if (type2 === "n")
        comma = true, type2 = "g";
      else if (!formatTypes_default[type2])
        precision == null && (precision = 12), trim = true, type2 = "g";
      if (zero2 || fill === "0" && align === "=")
        zero2 = true, fill = "0", align = "=";
      var prefix2 = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol === "$" ? currency[1] : /[%p]/.test(type2) ? percent : "";
      var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
      precision = precision == null ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
      function format2(value) {
        var valuePrefix = prefix2, valueSuffix = suffix, i, n, c3;
        if (type2 === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;
          var valueNegative = value < 0;
          value = formatType(Math.abs(value), precision);
          if (trim)
            value = formatTrim_default(value);
          if (valueNegative && +value === 0)
            valueNegative = false;
          valuePrefix = (valueNegative ? sign3 === "(" ? sign3 : "-" : sign3 === "-" || sign3 === "(" ? "" : sign3) + valuePrefix;
          valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign3 === "(" ? ")" : "");
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c3 = value.charCodeAt(i), 48 > c3 || c3 > 57) {
                valueSuffix = (c3 === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }
        if (comma && !zero2)
          value = group(value, Infinity);
        var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
        if (comma && zero2)
          value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
        switch (align) {
          case "<":
            value = valuePrefix + value + valueSuffix + padding;
            break;
          case "=":
            value = valuePrefix + padding + value + valueSuffix;
            break;
          case "^":
            value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
            break;
          default:
            value = padding + valuePrefix + value + valueSuffix;
            break;
        }
        return numerals(value);
      }
      format2.toString = function() {
        return specifier + "";
      };
      return format2;
    }
    function formatPrefix2(specifier, value) {
      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k2 = Math.pow(10, -e), prefix2 = prefixes[8 + e / 3];
      return function(value2) {
        return f(k2 * value2) + prefix2;
      };
    }
    return {
      format: newFormat,
      formatPrefix: formatPrefix2
    };
  }

  // node_modules/d3-format/src/defaultLocale.js
  var locale;
  var format;
  var formatPrefix;
  defaultLocale({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });
  function defaultLocale(definition) {
    locale = locale_default(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
  }

  // node_modules/d3-geo/src/adder.js
  function adder_default() {
    return new Adder();
  }
  function Adder() {
    this.reset();
  }
  Adder.prototype = {
    constructor: Adder,
    reset: function() {
      this.s = // rounded value
      this.t = 0;
    },
    add: function(y4) {
      add2(temp, y4, this.t);
      add2(this, temp.s, this.s);
      if (this.s)
        this.t += temp.t;
      else
        this.s = temp.t;
    },
    valueOf: function() {
      return this.s;
    }
  };
  var temp = new Adder();
  function add2(adder, a2, b) {
    var x4 = adder.s = a2 + b, bv = x4 - a2, av = x4 - bv;
    adder.t = a2 - av + (b - bv);
  }

  // node_modules/d3-geo/src/math.js
  var epsilon2 = 1e-6;
  var epsilon22 = 1e-12;
  var pi4 = Math.PI;
  var halfPi3 = pi4 / 2;
  var quarterPi = pi4 / 4;
  var tau4 = pi4 * 2;
  var degrees2 = 180 / pi4;
  var radians = pi4 / 180;
  var abs = Math.abs;
  var atan = Math.atan;
  var atan2 = Math.atan2;
  var cos2 = Math.cos;
  var exp = Math.exp;
  var log = Math.log;
  var sin2 = Math.sin;
  var sqrt = Math.sqrt;
  var tan = Math.tan;
  function acos(x4) {
    return x4 > 1 ? 0 : x4 < -1 ? pi4 : Math.acos(x4);
  }
  function asin(x4) {
    return x4 > 1 ? halfPi3 : x4 < -1 ? -halfPi3 : Math.asin(x4);
  }

  // node_modules/d3-geo/src/noop.js
  function noop2() {
  }

  // node_modules/d3-geo/src/area.js
  var areaRingSum = adder_default();
  var areaSum = adder_default();

  // node_modules/d3-geo/src/cartesian.js
  function cartesian(spherical2) {
    var lambda = spherical2[0], phi2 = spherical2[1], cosPhi = cos2(phi2);
    return [cosPhi * cos2(lambda), cosPhi * sin2(lambda), sin2(phi2)];
  }
  function cartesianCross(a2, b) {
    return [a2[1] * b[2] - a2[2] * b[1], a2[2] * b[0] - a2[0] * b[2], a2[0] * b[1] - a2[1] * b[0]];
  }
  function cartesianNormalizeInPlace(d) {
    var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
  }

  // node_modules/d3-geo/src/bounds.js
  var deltaSum = adder_default();

  // node_modules/d3-geo/src/rotation.js
  function rotationIdentity(lambda, phi2) {
    return [abs(lambda) > pi4 ? lambda + Math.round(-lambda / tau4) * tau4 : lambda, phi2];
  }
  rotationIdentity.invert = rotationIdentity;

  // node_modules/d3-geo/src/clip/buffer.js
  function buffer_default2() {
    var lines = [], line;
    return {
      point: function(x4, y4) {
        line.push([x4, y4]);
      },
      lineStart: function() {
        lines.push(line = []);
      },
      lineEnd: noop2,
      rejoin: function() {
        if (lines.length > 1)
          lines.push(lines.pop().concat(lines.shift()));
      },
      result: function() {
        var result = lines;
        lines = [];
        line = null;
        return result;
      }
    };
  }

  // node_modules/d3-geo/src/pointEqual.js
  function pointEqual_default(a2, b) {
    return abs(a2[0] - b[0]) < epsilon2 && abs(a2[1] - b[1]) < epsilon2;
  }

  // node_modules/d3-geo/src/clip/rejoin.js
  function Intersection(point6, points, other, entry) {
    this.x = point6;
    this.z = points;
    this.o = other;
    this.e = entry;
    this.v = false;
    this.n = this.p = null;
  }
  function rejoin_default(segments, compareIntersection2, startInside, interpolate, stream) {
    var subject = [], clip = [], i, n;
    segments.forEach(function(segment) {
      if ((n2 = segment.length - 1) <= 0)
        return;
      var n2, p0 = segment[0], p1 = segment[n2], x4;
      if (pointEqual_default(p0, p1)) {
        stream.lineStart();
        for (i = 0; i < n2; ++i)
          stream.point((p0 = segment[i])[0], p0[1]);
        stream.lineEnd();
        return;
      }
      subject.push(x4 = new Intersection(p0, segment, null, true));
      clip.push(x4.o = new Intersection(p0, null, x4, false));
      subject.push(x4 = new Intersection(p1, segment, null, false));
      clip.push(x4.o = new Intersection(p1, null, x4, true));
    });
    if (!subject.length)
      return;
    clip.sort(compareIntersection2);
    link(subject);
    link(clip);
    for (i = 0, n = clip.length; i < n; ++i) {
      clip[i].e = startInside = !startInside;
    }
    var start2 = subject[0], points, point6;
    while (1) {
      var current = start2, isSubject = true;
      while (current.v)
        if ((current = current.n) === start2)
          return;
      points = current.z;
      stream.lineStart();
      do {
        current.v = current.o.v = true;
        if (current.e) {
          if (isSubject) {
            for (i = 0, n = points.length; i < n; ++i)
              stream.point((point6 = points[i])[0], point6[1]);
          } else {
            interpolate(current.x, current.n.x, 1, stream);
          }
          current = current.n;
        } else {
          if (isSubject) {
            points = current.p.z;
            for (i = points.length - 1; i >= 0; --i)
              stream.point((point6 = points[i])[0], point6[1]);
          } else {
            interpolate(current.x, current.p.x, -1, stream);
          }
          current = current.p;
        }
        current = current.o;
        points = current.z;
        isSubject = !isSubject;
      } while (!current.v);
      stream.lineEnd();
    }
  }
  function link(array4) {
    if (!(n = array4.length))
      return;
    var n, i = 0, a2 = array4[0], b;
    while (++i < n) {
      a2.n = b = array4[i];
      b.p = a2;
      a2 = b;
    }
    a2.n = b = array4[0];
    b.p = a2;
  }

  // node_modules/d3-geo/src/polygonContains.js
  var sum = adder_default();
  function polygonContains_default(polygon, point6) {
    var lambda = point6[0], phi2 = point6[1], sinPhi = sin2(phi2), normal = [sin2(lambda), -cos2(lambda), 0], angle = 0, winding = 0;
    sum.reset();
    if (sinPhi === 1)
      phi2 = halfPi3 + epsilon2;
    else if (sinPhi === -1)
      phi2 = -halfPi3 - epsilon2;
    for (var i = 0, n = polygon.length; i < n; ++i) {
      if (!(m = (ring = polygon[i]).length))
        continue;
      var ring, m, point0 = ring[m - 1], lambda0 = point0[0], phi0 = point0[1] / 2 + quarterPi, sinPhi0 = sin2(phi0), cosPhi0 = cos2(phi0);
      for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
        var point1 = ring[j], lambda1 = point1[0], phi1 = point1[1] / 2 + quarterPi, sinPhi1 = sin2(phi1), cosPhi1 = cos2(phi1), delta = lambda1 - lambda0, sign3 = delta >= 0 ? 1 : -1, absDelta = sign3 * delta, antimeridian = absDelta > pi4, k2 = sinPhi0 * sinPhi1;
        sum.add(atan2(k2 * sign3 * sin2(absDelta), cosPhi0 * cosPhi1 + k2 * cos2(absDelta)));
        angle += antimeridian ? delta + sign3 * tau4 : delta;
        if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
          var arc = cartesianCross(cartesian(point0), cartesian(point1));
          cartesianNormalizeInPlace(arc);
          var intersection = cartesianCross(normal, arc);
          cartesianNormalizeInPlace(intersection);
          var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
          if (phi2 > phiArc || phi2 === phiArc && (arc[0] || arc[1])) {
            winding += antimeridian ^ delta >= 0 ? 1 : -1;
          }
        }
      }
    }
    return (angle < -epsilon2 || angle < epsilon2 && sum < -epsilon2) ^ winding & 1;
  }

  // node_modules/d3-geo/src/clip/index.js
  function clip_default(pointVisible, clipLine, interpolate, start2) {
    return function(sink) {
      var line = clipLine(sink), ringBuffer = buffer_default2(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
      var clip = {
        point: point6,
        lineStart,
        lineEnd,
        polygonStart: function() {
          clip.point = pointRing;
          clip.lineStart = ringStart;
          clip.lineEnd = ringEnd;
          segments = [];
          polygon = [];
        },
        polygonEnd: function() {
          clip.point = point6;
          clip.lineStart = lineStart;
          clip.lineEnd = lineEnd;
          segments = merge_default(segments);
          var startInside = polygonContains_default(polygon, start2);
          if (segments.length) {
            if (!polygonStarted)
              sink.polygonStart(), polygonStarted = true;
            rejoin_default(segments, compareIntersection, startInside, interpolate, sink);
          } else if (startInside) {
            if (!polygonStarted)
              sink.polygonStart(), polygonStarted = true;
            sink.lineStart();
            interpolate(null, null, 1, sink);
            sink.lineEnd();
          }
          if (polygonStarted)
            sink.polygonEnd(), polygonStarted = false;
          segments = polygon = null;
        },
        sphere: function() {
          sink.polygonStart();
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
          sink.polygonEnd();
        }
      };
      function point6(lambda, phi2) {
        if (pointVisible(lambda, phi2))
          sink.point(lambda, phi2);
      }
      function pointLine(lambda, phi2) {
        line.point(lambda, phi2);
      }
      function lineStart() {
        clip.point = pointLine;
        line.lineStart();
      }
      function lineEnd() {
        clip.point = point6;
        line.lineEnd();
      }
      function pointRing(lambda, phi2) {
        ring.push([lambda, phi2]);
        ringSink.point(lambda, phi2);
      }
      function ringStart() {
        ringSink.lineStart();
        ring = [];
      }
      function ringEnd() {
        pointRing(ring[0][0], ring[0][1]);
        ringSink.lineEnd();
        var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point7;
        ring.pop();
        polygon.push(ring);
        ring = null;
        if (!n)
          return;
        if (clean & 1) {
          segment = ringSegments[0];
          if ((m = segment.length - 1) > 0) {
            if (!polygonStarted)
              sink.polygonStart(), polygonStarted = true;
            sink.lineStart();
            for (i = 0; i < m; ++i)
              sink.point((point7 = segment[i])[0], point7[1]);
            sink.lineEnd();
          }
          return;
        }
        if (n > 1 && clean & 2)
          ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
        segments.push(ringSegments.filter(validSegment));
      }
      return clip;
    };
  }
  function validSegment(segment) {
    return segment.length > 1;
  }
  function compareIntersection(a2, b) {
    return ((a2 = a2.x)[0] < 0 ? a2[1] - halfPi3 - epsilon2 : halfPi3 - a2[1]) - ((b = b.x)[0] < 0 ? b[1] - halfPi3 - epsilon2 : halfPi3 - b[1]);
  }

  // node_modules/d3-geo/src/clip/antimeridian.js
  var antimeridian_default = clip_default(
    function() {
      return true;
    },
    clipAntimeridianLine,
    clipAntimeridianInterpolate,
    [-pi4, -halfPi3]
  );
  function clipAntimeridianLine(stream) {
    var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean;
    return {
      lineStart: function() {
        stream.lineStart();
        clean = 1;
      },
      point: function(lambda1, phi1) {
        var sign1 = lambda1 > 0 ? pi4 : -pi4, delta = abs(lambda1 - lambda0);
        if (abs(delta - pi4) < epsilon2) {
          stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi3 : -halfPi3);
          stream.point(sign0, phi0);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi0);
          stream.point(lambda1, phi0);
          clean = 0;
        } else if (sign0 !== sign1 && delta >= pi4) {
          if (abs(lambda0 - sign0) < epsilon2)
            lambda0 -= sign0 * epsilon2;
          if (abs(lambda1 - sign1) < epsilon2)
            lambda1 -= sign1 * epsilon2;
          phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
          stream.point(sign0, phi0);
          stream.lineEnd();
          stream.lineStart();
          stream.point(sign1, phi0);
          clean = 0;
        }
        stream.point(lambda0 = lambda1, phi0 = phi1);
        sign0 = sign1;
      },
      lineEnd: function() {
        stream.lineEnd();
        lambda0 = phi0 = NaN;
      },
      clean: function() {
        return 2 - clean;
      }
    };
  }
  function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
    var cosPhi0, cosPhi1, sinLambda0Lambda1 = sin2(lambda0 - lambda1);
    return abs(sinLambda0Lambda1) > epsilon2 ? atan((sin2(phi0) * (cosPhi1 = cos2(phi1)) * sin2(lambda1) - sin2(phi1) * (cosPhi0 = cos2(phi0)) * sin2(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
  }
  function clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi2;
    if (from == null) {
      phi2 = direction * halfPi3;
      stream.point(-pi4, phi2);
      stream.point(0, phi2);
      stream.point(pi4, phi2);
      stream.point(pi4, 0);
      stream.point(pi4, -phi2);
      stream.point(0, -phi2);
      stream.point(-pi4, -phi2);
      stream.point(-pi4, 0);
      stream.point(-pi4, phi2);
    } else if (abs(from[0] - to[0]) > epsilon2) {
      var lambda = from[0] < to[0] ? pi4 : -pi4;
      phi2 = direction * lambda / 2;
      stream.point(-lambda, phi2);
      stream.point(0, phi2);
      stream.point(lambda, phi2);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  // node_modules/d3-geo/src/clip/rectangle.js
  var clipMax = 1e9;
  var clipMin = -clipMax;

  // node_modules/d3-geo/src/length.js
  var lengthSum = adder_default();

  // node_modules/d3-geo/src/path/area.js
  var areaSum2 = adder_default();
  var areaRingSum2 = adder_default();

  // node_modules/d3-geo/src/path/bounds.js
  var x0 = Infinity;
  var x1 = -x0;

  // node_modules/d3-geo/src/path/context.js
  function PathContext(context) {
    this._context = context;
  }
  PathContext.prototype = {
    _radius: 4.5,
    pointRadius: function(_) {
      return this._radius = _, this;
    },
    polygonStart: function() {
      this._line = 0;
    },
    polygonEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line === 0)
        this._context.closePath();
      this._point = NaN;
    },
    point: function(x4, y4) {
      switch (this._point) {
        case 0: {
          this._context.moveTo(x4, y4);
          this._point = 1;
          break;
        }
        case 1: {
          this._context.lineTo(x4, y4);
          break;
        }
        default: {
          this._context.moveTo(x4 + this._radius, y4);
          this._context.arc(x4, y4, this._radius, 0, tau4);
          break;
        }
      }
    },
    result: noop2
  };

  // node_modules/d3-geo/src/path/measure.js
  var lengthSum2 = adder_default();

  // node_modules/d3-geo/src/path/string.js
  function PathString() {
    this._string = [];
  }
  PathString.prototype = {
    _radius: 4.5,
    _circle: circle(4.5),
    pointRadius: function(_) {
      if ((_ = +_) !== this._radius)
        this._radius = _, this._circle = null;
      return this;
    },
    polygonStart: function() {
      this._line = 0;
    },
    polygonEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line === 0)
        this._string.push("Z");
      this._point = NaN;
    },
    point: function(x4, y4) {
      switch (this._point) {
        case 0: {
          this._string.push("M", x4, ",", y4);
          this._point = 1;
          break;
        }
        case 1: {
          this._string.push("L", x4, ",", y4);
          break;
        }
        default: {
          if (this._circle == null)
            this._circle = circle(this._radius);
          this._string.push("M", x4, ",", y4, this._circle);
          break;
        }
      }
    },
    result: function() {
      if (this._string.length) {
        var result = this._string.join("");
        this._string = [];
        return result;
      } else {
        return null;
      }
    }
  };
  function circle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
  }

  // node_modules/d3-geo/src/transform.js
  function transformer(methods) {
    return function(stream) {
      var s2 = new TransformStream();
      for (var key in methods)
        s2[key] = methods[key];
      s2.stream = stream;
      return s2;
    };
  }
  function TransformStream() {
  }
  TransformStream.prototype = {
    constructor: TransformStream,
    point: function(x4, y4) {
      this.stream.point(x4, y4);
    },
    sphere: function() {
      this.stream.sphere();
    },
    lineStart: function() {
      this.stream.lineStart();
    },
    lineEnd: function() {
      this.stream.lineEnd();
    },
    polygonStart: function() {
      this.stream.polygonStart();
    },
    polygonEnd: function() {
      this.stream.polygonEnd();
    }
  };

  // node_modules/d3-geo/src/projection/resample.js
  var cosMinDistance = cos2(30 * radians);

  // node_modules/d3-geo/src/projection/index.js
  var transformRadians = transformer({
    point: function(x4, y4) {
      this.stream.point(x4 * radians, y4 * radians);
    }
  });

  // node_modules/d3-geo/src/projection/azimuthal.js
  function azimuthalRaw(scale) {
    return function(x4, y4) {
      var cx = cos2(x4), cy = cos2(y4), k2 = scale(cx * cy);
      return [
        k2 * cy * sin2(x4),
        k2 * sin2(y4)
      ];
    };
  }
  function azimuthalInvert(angle) {
    return function(x4, y4) {
      var z = sqrt(x4 * x4 + y4 * y4), c3 = angle(z), sc = sin2(c3), cc = cos2(c3);
      return [
        atan2(x4 * sc, z * cc),
        asin(z && y4 * sc / z)
      ];
    };
  }

  // node_modules/d3-geo/src/projection/azimuthalEqualArea.js
  var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
    return sqrt(2 / (1 + cxcy));
  });
  azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
    return 2 * asin(z / 2);
  });

  // node_modules/d3-geo/src/projection/azimuthalEquidistant.js
  var azimuthalEquidistantRaw = azimuthalRaw(function(c3) {
    return (c3 = acos(c3)) && c3 / sin2(c3);
  });
  azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
    return z;
  });

  // node_modules/d3-geo/src/projection/mercator.js
  function mercatorRaw(lambda, phi2) {
    return [lambda, log(tan((halfPi3 + phi2) / 2))];
  }
  mercatorRaw.invert = function(x4, y4) {
    return [x4, 2 * atan(exp(y4)) - halfPi3];
  };

  // node_modules/d3-geo/src/projection/equirectangular.js
  function equirectangularRaw(lambda, phi2) {
    return [lambda, phi2];
  }
  equirectangularRaw.invert = equirectangularRaw;

  // node_modules/d3-geo/src/projection/equalEarth.js
  var A1 = 1.340264;
  var A2 = -0.081106;
  var A3 = 893e-6;
  var A4 = 3796e-6;
  var M = sqrt(3) / 2;
  var iterations = 12;
  function equalEarthRaw(lambda, phi2) {
    var l = asin(M * sin2(phi2)), l2 = l * l, l6 = l2 * l2 * l2;
    return [
      lambda * cos2(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
      l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
    ];
  }
  equalEarthRaw.invert = function(x4, y4) {
    var l = y4, l2 = l * l, l6 = l2 * l2 * l2;
    for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
      fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y4;
      fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
      l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
      if (abs(delta) < epsilon22)
        break;
    }
    return [
      M * x4 * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / cos2(l),
      asin(sin2(l) / M)
    ];
  };

  // node_modules/d3-geo/src/projection/gnomonic.js
  function gnomonicRaw(x4, y4) {
    var cy = cos2(y4), k2 = cos2(x4) * cy;
    return [cy * sin2(x4) / k2, sin2(y4) / k2];
  }
  gnomonicRaw.invert = azimuthalInvert(atan);

  // node_modules/d3-geo/src/projection/naturalEarth1.js
  function naturalEarth1Raw(lambda, phi2) {
    var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
    return [
      lambda * (0.8707 - 0.131979 * phi22 + phi4 * (-0.013791 + phi4 * (3971e-6 * phi22 - 1529e-6 * phi4))),
      phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4)))
    ];
  }
  naturalEarth1Raw.invert = function(x4, y4) {
    var phi2 = y4, i = 25, delta;
    do {
      var phi22 = phi2 * phi2, phi4 = phi22 * phi22;
      phi2 -= delta = (phi2 * (1.007226 + phi22 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi22 - 5916e-6 * phi4))) - y4) / (1.007226 + phi22 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi22 - 5916e-6 * 11 * phi4)));
    } while (abs(delta) > epsilon2 && --i > 0);
    return [
      x4 / (0.8707 + (phi22 = phi2 * phi2) * (-0.131979 + phi22 * (-0.013791 + phi22 * phi22 * phi22 * (3971e-6 - 1529e-6 * phi22)))),
      phi2
    ];
  };

  // node_modules/d3-geo/src/projection/orthographic.js
  function orthographicRaw(x4, y4) {
    return [cos2(y4) * sin2(x4), sin2(y4)];
  }
  orthographicRaw.invert = azimuthalInvert(asin);

  // node_modules/d3-geo/src/projection/stereographic.js
  function stereographicRaw(x4, y4) {
    var cy = cos2(y4), k2 = 1 + cos2(x4) * cy;
    return [cy * sin2(x4) / k2, sin2(y4) / k2];
  }
  stereographicRaw.invert = azimuthalInvert(function(z) {
    return 2 * atan(z);
  });

  // node_modules/d3-geo/src/projection/transverseMercator.js
  function transverseMercatorRaw(lambda, phi2) {
    return [log(tan((halfPi3 + phi2) / 2)), -lambda];
  }
  transverseMercatorRaw.invert = function(x4, y4) {
    return [-y4, 2 * atan(exp(x4)) - halfPi3];
  };

  // node_modules/d3-hierarchy/src/hierarchy/count.js
  function count(node) {
    var sum3 = 0, children = node.children, i = children && children.length;
    if (!i)
      sum3 = 1;
    else
      while (--i >= 0)
        sum3 += children[i].value;
    node.value = sum3;
  }
  function count_default() {
    return this.eachAfter(count);
  }

  // node_modules/d3-hierarchy/src/hierarchy/each.js
  function each_default2(callback) {
    var node = this, current, next = [node], children, i, n;
    do {
      current = next.reverse(), next = [];
      while (node = current.pop()) {
        callback(node), children = node.children;
        if (children)
          for (i = 0, n = children.length; i < n; ++i) {
            next.push(children[i]);
          }
      }
    } while (next.length);
    return this;
  }

  // node_modules/d3-hierarchy/src/hierarchy/eachBefore.js
  function eachBefore_default(callback) {
    var node = this, nodes = [node], children, i;
    while (node = nodes.pop()) {
      callback(node), children = node.children;
      if (children)
        for (i = children.length - 1; i >= 0; --i) {
          nodes.push(children[i]);
        }
    }
    return this;
  }

  // node_modules/d3-hierarchy/src/hierarchy/eachAfter.js
  function eachAfter_default(callback) {
    var node = this, nodes = [node], next = [], children, i, n;
    while (node = nodes.pop()) {
      next.push(node), children = node.children;
      if (children)
        for (i = 0, n = children.length; i < n; ++i) {
          nodes.push(children[i]);
        }
    }
    while (node = next.pop()) {
      callback(node);
    }
    return this;
  }

  // node_modules/d3-hierarchy/src/hierarchy/sum.js
  function sum_default2(value) {
    return this.eachAfter(function(node) {
      var sum3 = +value(node.data) || 0, children = node.children, i = children && children.length;
      while (--i >= 0)
        sum3 += children[i].value;
      node.value = sum3;
    });
  }

  // node_modules/d3-hierarchy/src/hierarchy/sort.js
  function sort_default2(compare) {
    return this.eachBefore(function(node) {
      if (node.children) {
        node.children.sort(compare);
      }
    });
  }

  // node_modules/d3-hierarchy/src/hierarchy/path.js
  function path_default3(end) {
    var start2 = this, ancestor = leastCommonAncestor(start2, end), nodes = [start2];
    while (start2 !== ancestor) {
      start2 = start2.parent;
      nodes.push(start2);
    }
    var k2 = nodes.length;
    while (end !== ancestor) {
      nodes.splice(k2, 0, end);
      end = end.parent;
    }
    return nodes;
  }
  function leastCommonAncestor(a2, b) {
    if (a2 === b)
      return a2;
    var aNodes = a2.ancestors(), bNodes = b.ancestors(), c3 = null;
    a2 = aNodes.pop();
    b = bNodes.pop();
    while (a2 === b) {
      c3 = a2;
      a2 = aNodes.pop();
      b = bNodes.pop();
    }
    return c3;
  }

  // node_modules/d3-hierarchy/src/hierarchy/ancestors.js
  function ancestors_default() {
    var node = this, nodes = [node];
    while (node = node.parent) {
      nodes.push(node);
    }
    return nodes;
  }

  // node_modules/d3-hierarchy/src/hierarchy/descendants.js
  function descendants_default() {
    var nodes = [];
    this.each(function(node) {
      nodes.push(node);
    });
    return nodes;
  }

  // node_modules/d3-hierarchy/src/hierarchy/leaves.js
  function leaves_default() {
    var leaves = [];
    this.eachBefore(function(node) {
      if (!node.children) {
        leaves.push(node);
      }
    });
    return leaves;
  }

  // node_modules/d3-hierarchy/src/hierarchy/links.js
  function links_default() {
    var root2 = this, links = [];
    root2.each(function(node) {
      if (node !== root2) {
        links.push({ source: node.parent, target: node });
      }
    });
    return links;
  }

  // node_modules/d3-hierarchy/src/hierarchy/index.js
  function hierarchy(data, children) {
    var root2 = new Node(data), valued = +data.value && (root2.value = data.value), node, nodes = [root2], child, childs, i, n;
    if (children == null)
      children = defaultChildren;
    while (node = nodes.pop()) {
      if (valued)
        node.value = +node.data.value;
      if ((childs = children(node.data)) && (n = childs.length)) {
        node.children = new Array(n);
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = node.children[i] = new Node(childs[i]));
          child.parent = node;
          child.depth = node.depth + 1;
        }
      }
    }
    return root2.eachBefore(computeHeight);
  }
  function node_copy() {
    return hierarchy(this).eachBefore(copyData);
  }
  function defaultChildren(d) {
    return d.children;
  }
  function copyData(node) {
    node.data = node.data.data;
  }
  function computeHeight(node) {
    var height = 0;
    do
      node.height = height;
    while ((node = node.parent) && node.height < ++height);
  }
  function Node(data) {
    this.data = data;
    this.depth = this.height = 0;
    this.parent = null;
  }
  Node.prototype = hierarchy.prototype = {
    constructor: Node,
    count: count_default,
    each: each_default2,
    eachAfter: eachAfter_default,
    eachBefore: eachBefore_default,
    sum: sum_default2,
    sort: sort_default2,
    path: path_default3,
    ancestors: ancestors_default,
    descendants: descendants_default,
    leaves: leaves_default,
    links: links_default,
    copy: node_copy
  };

  // node_modules/d3-hierarchy/src/array.js
  var slice5 = Array.prototype.slice;

  // node_modules/d3-hierarchy/src/treemap/round.js
  function round_default2(node) {
    node.x0 = Math.round(node.x0);
    node.y0 = Math.round(node.y0);
    node.x1 = Math.round(node.x1);
    node.y1 = Math.round(node.y1);
  }

  // node_modules/d3-hierarchy/src/treemap/dice.js
  function dice_default(parent, x02, y0, x12, y1) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k2 = parent.value && (x12 - x02) / parent.value;
    while (++i < n) {
      node = nodes[i], node.y0 = y0, node.y1 = y1;
      node.x0 = x02, node.x1 = x02 += node.value * k2;
    }
  }

  // node_modules/d3-hierarchy/src/partition.js
  function partition_default() {
    var dx = 1, dy = 1, padding = 0, round = false;
    function partition(root2) {
      var n = root2.height + 1;
      root2.x0 = root2.y0 = padding;
      root2.x1 = dx;
      root2.y1 = dy / n;
      root2.eachBefore(positionNode(dy, n));
      if (round)
        root2.eachBefore(round_default2);
      return root2;
    }
    function positionNode(dy2, n) {
      return function(node) {
        if (node.children) {
          dice_default(node, node.x0, dy2 * (node.depth + 1) / n, node.x1, dy2 * (node.depth + 2) / n);
        }
        var x02 = node.x0, y0 = node.y0, x12 = node.x1 - padding, y1 = node.y1 - padding;
        if (x12 < x02)
          x02 = x12 = (x02 + x12) / 2;
        if (y1 < y0)
          y0 = y1 = (y0 + y1) / 2;
        node.x0 = x02;
        node.y0 = y0;
        node.x1 = x12;
        node.y1 = y1;
      };
    }
    partition.round = function(x4) {
      return arguments.length ? (round = !!x4, partition) : round;
    };
    partition.size = function(x4) {
      return arguments.length ? (dx = +x4[0], dy = +x4[1], partition) : [dx, dy];
    };
    partition.padding = function(x4) {
      return arguments.length ? (padding = +x4, partition) : padding;
    };
    return partition;
  }

  // node_modules/d3-hierarchy/src/tree.js
  function TreeNode(node, i) {
    this._ = node;
    this.parent = null;
    this.children = null;
    this.A = null;
    this.a = this;
    this.z = 0;
    this.m = 0;
    this.c = 0;
    this.s = 0;
    this.t = null;
    this.i = i;
  }
  TreeNode.prototype = Object.create(Node.prototype);

  // node_modules/d3-hierarchy/src/treemap/slice.js
  function slice_default(parent, x02, y0, x12, y1) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k2 = parent.value && (y1 - y0) / parent.value;
    while (++i < n) {
      node = nodes[i], node.x0 = x02, node.x1 = x12;
      node.y0 = y0, node.y1 = y0 += node.value * k2;
    }
  }

  // node_modules/d3-hierarchy/src/treemap/squarify.js
  var phi = (1 + Math.sqrt(5)) / 2;
  function squarifyRatio(ratio, parent, x02, y0, x12, y1) {
    var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
    while (i0 < n) {
      dx = x12 - x02, dy = y1 - y0;
      do
        sumValue = nodes[i1++].value;
      while (!sumValue && i1 < n);
      minValue = maxValue = sumValue;
      alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
      beta = sumValue * sumValue * alpha;
      minRatio = Math.max(maxValue / beta, beta / minValue);
      for (; i1 < n; ++i1) {
        sumValue += nodeValue = nodes[i1].value;
        if (nodeValue < minValue)
          minValue = nodeValue;
        if (nodeValue > maxValue)
          maxValue = nodeValue;
        beta = sumValue * sumValue * alpha;
        newRatio = Math.max(maxValue / beta, beta / minValue);
        if (newRatio > minRatio) {
          sumValue -= nodeValue;
          break;
        }
        minRatio = newRatio;
      }
      rows.push(row = { value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1) });
      if (row.dice)
        dice_default(row, x02, y0, x12, value ? y0 += dy * sumValue / value : y1);
      else
        slice_default(row, x02, y0, value ? x02 += dx * sumValue / value : x12, y1);
      value -= sumValue, i0 = i1;
    }
    return rows;
  }
  var squarify_default = function custom10(ratio) {
    function squarify(parent, x02, y0, x12, y1) {
      squarifyRatio(ratio, parent, x02, y0, x12, y1);
    }
    squarify.ratio = function(x4) {
      return custom10((x4 = +x4) > 1 ? x4 : 1);
    };
    return squarify;
  }(phi);

  // node_modules/d3-hierarchy/src/treemap/resquarify.js
  var resquarify_default = function custom11(ratio) {
    function resquarify(parent, x02, y0, x12, y1) {
      if ((rows = parent._squarify) && rows.ratio === ratio) {
        var rows, row, nodes, i, j = -1, n, m = rows.length, value = parent.value;
        while (++j < m) {
          row = rows[j], nodes = row.children;
          for (i = row.value = 0, n = nodes.length; i < n; ++i)
            row.value += nodes[i].value;
          if (row.dice)
            dice_default(row, x02, y0, x12, y0 += (y1 - y0) * row.value / value);
          else
            slice_default(row, x02, y0, x02 += (x12 - x02) * row.value / value, y1);
          value -= row.value;
        }
      } else {
        parent._squarify = rows = squarifyRatio(ratio, parent, x02, y0, x12, y1);
        rows.ratio = ratio;
      }
    }
    resquarify.ratio = function(x4) {
      return custom11((x4 = +x4) > 1 ? x4 : 1);
    };
    return resquarify;
  }(phi);

  // node_modules/d3-random/src/defaultSource.js
  function defaultSource_default() {
    return Math.random();
  }

  // node_modules/d3-random/src/uniform.js
  var uniform_default = function sourceRandomUniform(source) {
    function randomUniform(min2, max3) {
      min2 = min2 == null ? 0 : +min2;
      max3 = max3 == null ? 1 : +max3;
      if (arguments.length === 1)
        max3 = min2, min2 = 0;
      else
        max3 -= min2;
      return function() {
        return source() * max3 + min2;
      };
    }
    randomUniform.source = sourceRandomUniform;
    return randomUniform;
  }(defaultSource_default);

  // node_modules/d3-random/src/normal.js
  var normal_default = function sourceRandomNormal(source) {
    function randomNormal(mu, sigma) {
      var x4, r;
      mu = mu == null ? 0 : +mu;
      sigma = sigma == null ? 1 : +sigma;
      return function() {
        var y4;
        if (x4 != null)
          y4 = x4, x4 = null;
        else
          do {
            x4 = source() * 2 - 1;
            y4 = source() * 2 - 1;
            r = x4 * x4 + y4 * y4;
          } while (!r || r > 1);
        return mu + sigma * y4 * Math.sqrt(-2 * Math.log(r) / r);
      };
    }
    randomNormal.source = sourceRandomNormal;
    return randomNormal;
  }(defaultSource_default);

  // node_modules/d3-random/src/logNormal.js
  var logNormal_default = function sourceRandomLogNormal(source) {
    function randomLogNormal() {
      var randomNormal = normal_default.source(source).apply(this, arguments);
      return function() {
        return Math.exp(randomNormal());
      };
    }
    randomLogNormal.source = sourceRandomLogNormal;
    return randomLogNormal;
  }(defaultSource_default);

  // node_modules/d3-random/src/irwinHall.js
  var irwinHall_default = function sourceRandomIrwinHall(source) {
    function randomIrwinHall(n) {
      return function() {
        for (var sum3 = 0, i = 0; i < n; ++i)
          sum3 += source();
        return sum3;
      };
    }
    randomIrwinHall.source = sourceRandomIrwinHall;
    return randomIrwinHall;
  }(defaultSource_default);

  // node_modules/d3-random/src/bates.js
  var bates_default = function sourceRandomBates(source) {
    function randomBates(n) {
      var randomIrwinHall = irwinHall_default.source(source)(n);
      return function() {
        return randomIrwinHall() / n;
      };
    }
    randomBates.source = sourceRandomBates;
    return randomBates;
  }(defaultSource_default);

  // node_modules/d3-random/src/exponential.js
  var exponential_default = function sourceRandomExponential(source) {
    function randomExponential(lambda) {
      return function() {
        return -Math.log(1 - source()) / lambda;
      };
    }
    randomExponential.source = sourceRandomExponential;
    return randomExponential;
  }(defaultSource_default);

  // node_modules/d3-scale/src/array.js
  var array3 = Array.prototype;
  var map3 = array3.map;
  var slice6 = array3.slice;

  // node_modules/d3-time/src/interval.js
  var t02 = /* @__PURE__ */ new Date();
  var t12 = /* @__PURE__ */ new Date();
  function newInterval(floori, offseti, count2, field) {
    function interval2(date) {
      return floori(date = /* @__PURE__ */ new Date(+date)), date;
    }
    interval2.floor = interval2;
    interval2.ceil = function(date) {
      return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
    };
    interval2.round = function(date) {
      var d0 = interval2(date), d1 = interval2.ceil(date);
      return date - d0 < d1 - date ? d0 : d1;
    };
    interval2.offset = function(date, step) {
      return offseti(date = /* @__PURE__ */ new Date(+date), step == null ? 1 : Math.floor(step)), date;
    };
    interval2.range = function(start2, stop, step) {
      var range = [], previous;
      start2 = interval2.ceil(start2);
      step = step == null ? 1 : Math.floor(step);
      if (!(start2 < stop) || !(step > 0))
        return range;
      do
        range.push(previous = /* @__PURE__ */ new Date(+start2)), offseti(start2, step), floori(start2);
      while (previous < start2 && start2 < stop);
      return range;
    };
    interval2.filter = function(test) {
      return newInterval(function(date) {
        if (date >= date)
          while (floori(date), !test(date))
            date.setTime(date - 1);
      }, function(date, step) {
        if (date >= date) {
          if (step < 0)
            while (++step <= 0) {
              while (offseti(date, -1), !test(date)) {
              }
            }
          else
            while (--step >= 0) {
              while (offseti(date, 1), !test(date)) {
              }
            }
        }
      });
    };
    if (count2) {
      interval2.count = function(start2, end) {
        t02.setTime(+start2), t12.setTime(+end);
        floori(t02), floori(t12);
        return Math.floor(count2(t02, t12));
      };
      interval2.every = function(step) {
        step = Math.floor(step);
        return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval2 : interval2.filter(field ? function(d) {
          return field(d) % step === 0;
        } : function(d) {
          return interval2.count(0, d) % step === 0;
        });
      };
    }
    return interval2;
  }

  // node_modules/d3-time/src/millisecond.js
  var millisecond = newInterval(function() {
  }, function(date, step) {
    date.setTime(+date + step);
  }, function(start2, end) {
    return end - start2;
  });
  millisecond.every = function(k2) {
    k2 = Math.floor(k2);
    if (!isFinite(k2) || !(k2 > 0))
      return null;
    if (!(k2 > 1))
      return millisecond;
    return newInterval(function(date) {
      date.setTime(Math.floor(date / k2) * k2);
    }, function(date, step) {
      date.setTime(+date + step * k2);
    }, function(start2, end) {
      return (end - start2) / k2;
    });
  };
  var milliseconds = millisecond.range;

  // node_modules/d3-time/src/duration.js
  var durationSecond = 1e3;
  var durationMinute = 6e4;
  var durationHour = 36e5;
  var durationDay = 864e5;
  var durationWeek = 6048e5;

  // node_modules/d3-time/src/second.js
  var second = newInterval(function(date) {
    date.setTime(date - date.getMilliseconds());
  }, function(date, step) {
    date.setTime(+date + step * durationSecond);
  }, function(start2, end) {
    return (end - start2) / durationSecond;
  }, function(date) {
    return date.getUTCSeconds();
  });
  var seconds = second.range;

  // node_modules/d3-time/src/minute.js
  var minute = newInterval(function(date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
  }, function(date, step) {
    date.setTime(+date + step * durationMinute);
  }, function(start2, end) {
    return (end - start2) / durationMinute;
  }, function(date) {
    return date.getMinutes();
  });
  var minutes = minute.range;

  // node_modules/d3-time/src/hour.js
  var hour = newInterval(function(date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
  }, function(date, step) {
    date.setTime(+date + step * durationHour);
  }, function(start2, end) {
    return (end - start2) / durationHour;
  }, function(date) {
    return date.getHours();
  });
  var hours = hour.range;

  // node_modules/d3-time/src/day.js
  var day = newInterval(function(date) {
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step);
  }, function(start2, end) {
    return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationDay;
  }, function(date) {
    return date.getDate() - 1;
  });
  var day_default = day;
  var days = day.range;

  // node_modules/d3-time/src/week.js
  function weekday(i) {
    return newInterval(function(date) {
      date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
      date.setHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setDate(date.getDate() + step * 7);
    }, function(start2, end) {
      return (end - start2 - (end.getTimezoneOffset() - start2.getTimezoneOffset()) * durationMinute) / durationWeek;
    });
  }
  var sunday = weekday(0);
  var monday = weekday(1);
  var tuesday = weekday(2);
  var wednesday = weekday(3);
  var thursday = weekday(4);
  var friday = weekday(5);
  var saturday = weekday(6);
  var sundays = sunday.range;
  var mondays = monday.range;
  var tuesdays = tuesday.range;
  var wednesdays = wednesday.range;
  var thursdays = thursday.range;
  var fridays = friday.range;
  var saturdays = saturday.range;

  // node_modules/d3-time/src/month.js
  var month = newInterval(function(date) {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setMonth(date.getMonth() + step);
  }, function(start2, end) {
    return end.getMonth() - start2.getMonth() + (end.getFullYear() - start2.getFullYear()) * 12;
  }, function(date) {
    return date.getMonth();
  });
  var months = month.range;

  // node_modules/d3-time/src/year.js
  var year = newInterval(function(date) {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step);
  }, function(start2, end) {
    return end.getFullYear() - start2.getFullYear();
  }, function(date) {
    return date.getFullYear();
  });
  year.every = function(k2) {
    return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval(function(date) {
      date.setFullYear(Math.floor(date.getFullYear() / k2) * k2);
      date.setMonth(0, 1);
      date.setHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setFullYear(date.getFullYear() + step * k2);
    });
  };
  var year_default = year;
  var years = year.range;

  // node_modules/d3-time/src/utcMinute.js
  var utcMinute = newInterval(function(date) {
    date.setUTCSeconds(0, 0);
  }, function(date, step) {
    date.setTime(+date + step * durationMinute);
  }, function(start2, end) {
    return (end - start2) / durationMinute;
  }, function(date) {
    return date.getUTCMinutes();
  });
  var utcMinutes = utcMinute.range;

  // node_modules/d3-time/src/utcHour.js
  var utcHour = newInterval(function(date) {
    date.setUTCMinutes(0, 0, 0);
  }, function(date, step) {
    date.setTime(+date + step * durationHour);
  }, function(start2, end) {
    return (end - start2) / durationHour;
  }, function(date) {
    return date.getUTCHours();
  });
  var utcHours = utcHour.range;

  // node_modules/d3-time/src/utcDay.js
  var utcDay = newInterval(function(date) {
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step);
  }, function(start2, end) {
    return (end - start2) / durationDay;
  }, function(date) {
    return date.getUTCDate() - 1;
  });
  var utcDay_default = utcDay;
  var utcDays = utcDay.range;

  // node_modules/d3-time/src/utcWeek.js
  function utcWeekday(i) {
    return newInterval(function(date) {
      date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
      date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setUTCDate(date.getUTCDate() + step * 7);
    }, function(start2, end) {
      return (end - start2) / durationWeek;
    });
  }
  var utcSunday = utcWeekday(0);
  var utcMonday = utcWeekday(1);
  var utcTuesday = utcWeekday(2);
  var utcWednesday = utcWeekday(3);
  var utcThursday = utcWeekday(4);
  var utcFriday = utcWeekday(5);
  var utcSaturday = utcWeekday(6);
  var utcSundays = utcSunday.range;
  var utcMondays = utcMonday.range;
  var utcTuesdays = utcTuesday.range;
  var utcWednesdays = utcWednesday.range;
  var utcThursdays = utcThursday.range;
  var utcFridays = utcFriday.range;
  var utcSaturdays = utcSaturday.range;

  // node_modules/d3-time/src/utcMonth.js
  var utcMonth = newInterval(function(date) {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCMonth(date.getUTCMonth() + step);
  }, function(start2, end) {
    return end.getUTCMonth() - start2.getUTCMonth() + (end.getUTCFullYear() - start2.getUTCFullYear()) * 12;
  }, function(date) {
    return date.getUTCMonth();
  });
  var utcMonths = utcMonth.range;

  // node_modules/d3-time/src/utcYear.js
  var utcYear = newInterval(function(date) {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step);
  }, function(start2, end) {
    return end.getUTCFullYear() - start2.getUTCFullYear();
  }, function(date) {
    return date.getUTCFullYear();
  });
  utcYear.every = function(k2) {
    return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : newInterval(function(date) {
      date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k2) * k2);
      date.setUTCMonth(0, 1);
      date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
      date.setUTCFullYear(date.getUTCFullYear() + step * k2);
    });
  };
  var utcYear_default = utcYear;
  var utcYears = utcYear.range;

  // node_modules/d3-time-format/src/locale.js
  function localDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
      date.setFullYear(d.y);
      return date;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
  }
  function utcDate(d) {
    if (0 <= d.y && d.y < 100) {
      var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
      date.setUTCFullYear(d.y);
      return date;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
  }
  function newYear(y4) {
    return { y: y4, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
  }
  function formatLocale(locale3) {
    var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
    var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
    var formats = {
      "a": formatShortWeekday,
      "A": formatWeekday,
      "b": formatShortMonth,
      "B": formatMonth,
      "c": null,
      "d": formatDayOfMonth,
      "e": formatDayOfMonth,
      "f": formatMicroseconds,
      "H": formatHour24,
      "I": formatHour12,
      "j": formatDayOfYear,
      "L": formatMilliseconds,
      "m": formatMonthNumber,
      "M": formatMinutes,
      "p": formatPeriod,
      "Q": formatUnixTimestamp,
      "s": formatUnixTimestampSeconds,
      "S": formatSeconds,
      "u": formatWeekdayNumberMonday,
      "U": formatWeekNumberSunday,
      "V": formatWeekNumberISO,
      "w": formatWeekdayNumberSunday,
      "W": formatWeekNumberMonday,
      "x": null,
      "X": null,
      "y": formatYear2,
      "Y": formatFullYear,
      "Z": formatZone,
      "%": formatLiteralPercent
    };
    var utcFormats = {
      "a": formatUTCShortWeekday,
      "A": formatUTCWeekday,
      "b": formatUTCShortMonth,
      "B": formatUTCMonth,
      "c": null,
      "d": formatUTCDayOfMonth,
      "e": formatUTCDayOfMonth,
      "f": formatUTCMicroseconds,
      "H": formatUTCHour24,
      "I": formatUTCHour12,
      "j": formatUTCDayOfYear,
      "L": formatUTCMilliseconds,
      "m": formatUTCMonthNumber,
      "M": formatUTCMinutes,
      "p": formatUTCPeriod,
      "Q": formatUnixTimestamp,
      "s": formatUnixTimestampSeconds,
      "S": formatUTCSeconds,
      "u": formatUTCWeekdayNumberMonday,
      "U": formatUTCWeekNumberSunday,
      "V": formatUTCWeekNumberISO,
      "w": formatUTCWeekdayNumberSunday,
      "W": formatUTCWeekNumberMonday,
      "x": null,
      "X": null,
      "y": formatUTCYear,
      "Y": formatUTCFullYear,
      "Z": formatUTCZone,
      "%": formatLiteralPercent
    };
    var parses = {
      "a": parseShortWeekday,
      "A": parseWeekday,
      "b": parseShortMonth,
      "B": parseMonth,
      "c": parseLocaleDateTime,
      "d": parseDayOfMonth,
      "e": parseDayOfMonth,
      "f": parseMicroseconds,
      "H": parseHour24,
      "I": parseHour24,
      "j": parseDayOfYear,
      "L": parseMilliseconds,
      "m": parseMonthNumber,
      "M": parseMinutes,
      "p": parsePeriod,
      "Q": parseUnixTimestamp,
      "s": parseUnixTimestampSeconds,
      "S": parseSeconds,
      "u": parseWeekdayNumberMonday,
      "U": parseWeekNumberSunday,
      "V": parseWeekNumberISO,
      "w": parseWeekdayNumberSunday,
      "W": parseWeekNumberMonday,
      "x": parseLocaleDate,
      "X": parseLocaleTime,
      "y": parseYear,
      "Y": parseFullYear,
      "Z": parseZone,
      "%": parseLiteralPercent
    };
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats2) {
      return function(date) {
        var string = [], i = -1, j = 0, n = specifier.length, c3, pad3, format2;
        if (!(date instanceof Date))
          date = /* @__PURE__ */ new Date(+date);
        while (++i < n) {
          if (specifier.charCodeAt(i) === 37) {
            string.push(specifier.slice(j, i));
            if ((pad3 = pads[c3 = specifier.charAt(++i)]) != null)
              c3 = specifier.charAt(++i);
            else
              pad3 = c3 === "e" ? " " : "0";
            if (format2 = formats2[c3])
              c3 = format2(date, pad3);
            string.push(c3);
            j = i + 1;
          }
        }
        string.push(specifier.slice(j, i));
        return string.join("");
      };
    }
    function newParse(specifier, newDate) {
      return function(string) {
        var d = newYear(1900), i = parseSpecifier(d, specifier, string += "", 0), week, day2;
        if (i != string.length)
          return null;
        if ("Q" in d)
          return new Date(d.Q);
        if ("p" in d)
          d.H = d.H % 12 + d.p * 12;
        if ("V" in d) {
          if (d.V < 1 || d.V > 53)
            return null;
          if (!("w" in d))
            d.w = 1;
          if ("Z" in d) {
            week = utcDate(newYear(d.y)), day2 = week.getUTCDay();
            week = day2 > 4 || day2 === 0 ? utcMonday.ceil(week) : utcMonday(week);
            week = utcDay_default.offset(week, (d.V - 1) * 7);
            d.y = week.getUTCFullYear();
            d.m = week.getUTCMonth();
            d.d = week.getUTCDate() + (d.w + 6) % 7;
          } else {
            week = newDate(newYear(d.y)), day2 = week.getDay();
            week = day2 > 4 || day2 === 0 ? monday.ceil(week) : monday(week);
            week = day_default.offset(week, (d.V - 1) * 7);
            d.y = week.getFullYear();
            d.m = week.getMonth();
            d.d = week.getDate() + (d.w + 6) % 7;
          }
        } else if ("W" in d || "U" in d) {
          if (!("w" in d))
            d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
          day2 = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
          d.m = 0;
          d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day2 + 5) % 7 : d.w + d.U * 7 - (day2 + 6) % 7;
        }
        if ("Z" in d) {
          d.H += d.Z / 100 | 0;
          d.M += d.Z % 100;
          return utcDate(d);
        }
        return newDate(d);
      };
    }
    function parseSpecifier(d, specifier, string, j) {
      var i = 0, n = specifier.length, m = string.length, c3, parse;
      while (i < n) {
        if (j >= m)
          return -1;
        c3 = specifier.charCodeAt(i++);
        if (c3 === 37) {
          c3 = specifier.charAt(i++);
          parse = parses[c3 in pads ? specifier.charAt(i++) : c3];
          if (!parse || (j = parse(d, string, j)) < 0)
            return -1;
        } else if (c3 != string.charCodeAt(j++)) {
          return -1;
        }
      }
      return j;
    }
    function parsePeriod(d, string, i) {
      var n = periodRe.exec(string.slice(i));
      return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
      var n = shortWeekdayRe.exec(string.slice(i));
      return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
      var n = weekdayRe.exec(string.slice(i));
      return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
      var n = shortMonthRe.exec(string.slice(i));
      return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
      var n = monthRe.exec(string.slice(i));
      return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
      return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
      return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
      return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
      return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
      return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
      return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
      return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
      return locale_periods[+(d.getHours() >= 12)];
    }
    function formatUTCShortWeekday(d) {
      return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
      return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
      return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
      return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
      return locale_periods[+(d.getUTCHours() >= 12)];
    }
    return {
      format: function(specifier) {
        var f = newFormat(specifier += "", formats);
        f.toString = function() {
          return specifier;
        };
        return f;
      },
      parse: function(specifier) {
        var p = newParse(specifier += "", localDate);
        p.toString = function() {
          return specifier;
        };
        return p;
      },
      utcFormat: function(specifier) {
        var f = newFormat(specifier += "", utcFormats);
        f.toString = function() {
          return specifier;
        };
        return f;
      },
      utcParse: function(specifier) {
        var p = newParse(specifier, utcDate);
        p.toString = function() {
          return specifier;
        };
        return p;
      }
    };
  }
  var pads = { "-": "", "_": " ", "0": "0" };
  var numberRe = /^\s*\d+/;
  var percentRe = /^%/;
  var requoteRe = /[\\^$*+?|[\]().{}]/g;
  function pad2(value, fill, width) {
    var sign3 = value < 0 ? "-" : "", string = (sign3 ? -value : value) + "", length = string.length;
    return sign3 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
  }
  function requote(s2) {
    return s2.replace(requoteRe, "\\$&");
  }
  function formatRe(names) {
    return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
  }
  function formatLookup(names) {
    var map4 = {}, i = -1, n = names.length;
    while (++i < n)
      map4[names[i].toLowerCase()] = i;
    return map4;
  }
  function parseWeekdayNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
  }
  function parseWeekdayNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberSunday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberISO(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
  }
  function parseWeekNumberMonday(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
  }
  function parseFullYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
  }
  function parseYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
  }
  function parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
  }
  function parseMonthNumber(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
  }
  function parseDayOfMonth(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
  }
  function parseDayOfYear(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
  }
  function parseHour24(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
  }
  function parseMinutes(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
  }
  function parseSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
  }
  function parseMilliseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
  }
  function parseMicroseconds(d, string, i) {
    var n = numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
  }
  function parseLiteralPercent(d, string, i) {
    var n = percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
  }
  function parseUnixTimestamp(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
  }
  function parseUnixTimestampSeconds(d, string, i) {
    var n = numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0] * 1e3, i + n[0].length) : -1;
  }
  function formatDayOfMonth(d, p) {
    return pad2(d.getDate(), p, 2);
  }
  function formatHour24(d, p) {
    return pad2(d.getHours(), p, 2);
  }
  function formatHour12(d, p) {
    return pad2(d.getHours() % 12 || 12, p, 2);
  }
  function formatDayOfYear(d, p) {
    return pad2(1 + day_default.count(year_default(d), d), p, 3);
  }
  function formatMilliseconds(d, p) {
    return pad2(d.getMilliseconds(), p, 3);
  }
  function formatMicroseconds(d, p) {
    return formatMilliseconds(d, p) + "000";
  }
  function formatMonthNumber(d, p) {
    return pad2(d.getMonth() + 1, p, 2);
  }
  function formatMinutes(d, p) {
    return pad2(d.getMinutes(), p, 2);
  }
  function formatSeconds(d, p) {
    return pad2(d.getSeconds(), p, 2);
  }
  function formatWeekdayNumberMonday(d) {
    var day2 = d.getDay();
    return day2 === 0 ? 7 : day2;
  }
  function formatWeekNumberSunday(d, p) {
    return pad2(sunday.count(year_default(d), d), p, 2);
  }
  function formatWeekNumberISO(d, p) {
    var day2 = d.getDay();
    d = day2 >= 4 || day2 === 0 ? thursday(d) : thursday.ceil(d);
    return pad2(thursday.count(year_default(d), d) + (year_default(d).getDay() === 4), p, 2);
  }
  function formatWeekdayNumberSunday(d) {
    return d.getDay();
  }
  function formatWeekNumberMonday(d, p) {
    return pad2(monday.count(year_default(d), d), p, 2);
  }
  function formatYear2(d, p) {
    return pad2(d.getFullYear() % 100, p, 2);
  }
  function formatFullYear(d, p) {
    return pad2(d.getFullYear() % 1e4, p, 4);
  }
  function formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+")) + pad2(z / 60 | 0, "0", 2) + pad2(z % 60, "0", 2);
  }
  function formatUTCDayOfMonth(d, p) {
    return pad2(d.getUTCDate(), p, 2);
  }
  function formatUTCHour24(d, p) {
    return pad2(d.getUTCHours(), p, 2);
  }
  function formatUTCHour12(d, p) {
    return pad2(d.getUTCHours() % 12 || 12, p, 2);
  }
  function formatUTCDayOfYear(d, p) {
    return pad2(1 + utcDay_default.count(utcYear_default(d), d), p, 3);
  }
  function formatUTCMilliseconds(d, p) {
    return pad2(d.getUTCMilliseconds(), p, 3);
  }
  function formatUTCMicroseconds(d, p) {
    return formatUTCMilliseconds(d, p) + "000";
  }
  function formatUTCMonthNumber(d, p) {
    return pad2(d.getUTCMonth() + 1, p, 2);
  }
  function formatUTCMinutes(d, p) {
    return pad2(d.getUTCMinutes(), p, 2);
  }
  function formatUTCSeconds(d, p) {
    return pad2(d.getUTCSeconds(), p, 2);
  }
  function formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
  }
  function formatUTCWeekNumberSunday(d, p) {
    return pad2(utcSunday.count(utcYear_default(d), d), p, 2);
  }
  function formatUTCWeekNumberISO(d, p) {
    var day2 = d.getUTCDay();
    d = day2 >= 4 || day2 === 0 ? utcThursday(d) : utcThursday.ceil(d);
    return pad2(utcThursday.count(utcYear_default(d), d) + (utcYear_default(d).getUTCDay() === 4), p, 2);
  }
  function formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
  }
  function formatUTCWeekNumberMonday(d, p) {
    return pad2(utcMonday.count(utcYear_default(d), d), p, 2);
  }
  function formatUTCYear(d, p) {
    return pad2(d.getUTCFullYear() % 100, p, 2);
  }
  function formatUTCFullYear(d, p) {
    return pad2(d.getUTCFullYear() % 1e4, p, 4);
  }
  function formatUTCZone() {
    return "+0000";
  }
  function formatLiteralPercent() {
    return "%";
  }
  function formatUnixTimestamp(d) {
    return +d;
  }
  function formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1e3);
  }

  // node_modules/d3-time-format/src/defaultLocale.js
  var locale2;
  var timeFormat;
  var timeParse;
  var utcFormat;
  var utcParse;
  defaultLocale2({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  });
  function defaultLocale2(definition) {
    locale2 = formatLocale(definition);
    timeFormat = locale2.format;
    timeParse = locale2.parse;
    utcFormat = locale2.utcFormat;
    utcParse = locale2.utcParse;
    return locale2;
  }

  // node_modules/d3-time-format/src/isoFormat.js
  var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";
  function formatIsoNative(date) {
    return date.toISOString();
  }
  var formatIso = Date.prototype.toISOString ? formatIsoNative : utcFormat(isoSpecifier);

  // node_modules/d3-time-format/src/isoParse.js
  function parseIsoNative(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
  }
  var parseIso = +/* @__PURE__ */ new Date("2000-01-01T00:00:00.000Z") ? parseIsoNative : utcParse(isoSpecifier);

  // node_modules/d3-scale/src/time.js
  var durationSecond2 = 1e3;
  var durationMinute2 = durationSecond2 * 60;
  var durationHour2 = durationMinute2 * 60;
  var durationDay2 = durationHour2 * 24;
  var durationWeek2 = durationDay2 * 7;
  var durationMonth = durationDay2 * 30;
  var durationYear = durationDay2 * 365;

  // node_modules/d3-scale-chromatic/src/colors.js
  function colors_default(specifier) {
    var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
    while (i < n)
      colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
  }

  // node_modules/d3-scale-chromatic/src/categorical/category10.js
  var category10_default = colors_default("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

  // node_modules/d3-scale-chromatic/src/categorical/Accent.js
  var Accent_default = colors_default("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

  // node_modules/d3-scale-chromatic/src/categorical/Dark2.js
  var Dark2_default = colors_default("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

  // node_modules/d3-scale-chromatic/src/categorical/Paired.js
  var Paired_default = colors_default("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

  // node_modules/d3-scale-chromatic/src/categorical/Pastel1.js
  var Pastel1_default = colors_default("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

  // node_modules/d3-scale-chromatic/src/categorical/Pastel2.js
  var Pastel2_default = colors_default("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

  // node_modules/d3-scale-chromatic/src/categorical/Set1.js
  var Set1_default = colors_default("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

  // node_modules/d3-scale-chromatic/src/categorical/Set2.js
  var Set2_default = colors_default("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

  // node_modules/d3-scale-chromatic/src/categorical/Set3.js
  var Set3_default = colors_default("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

  // node_modules/d3-scale-chromatic/src/ramp.js
  function ramp_default(scheme28) {
    return rgbBasis(scheme28[scheme28.length - 1]);
  }

  // node_modules/d3-scale-chromatic/src/diverging/BrBG.js
  var scheme = new Array(3).concat(
    "d8b365f5f5f55ab4ac",
    "a6611adfc27d80cdc1018571",
    "a6611adfc27df5f5f580cdc1018571",
    "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
    "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
    "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
    "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
    "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
    "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
  ).map(colors_default);
  var BrBG_default = ramp_default(scheme);

  // node_modules/d3-scale-chromatic/src/diverging/PRGn.js
  var scheme2 = new Array(3).concat(
    "af8dc3f7f7f77fbf7b",
    "7b3294c2a5cfa6dba0008837",
    "7b3294c2a5cff7f7f7a6dba0008837",
    "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
    "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
    "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
    "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
    "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
    "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
  ).map(colors_default);
  var PRGn_default = ramp_default(scheme2);

  // node_modules/d3-scale-chromatic/src/diverging/PiYG.js
  var scheme3 = new Array(3).concat(
    "e9a3c9f7f7f7a1d76a",
    "d01c8bf1b6dab8e1864dac26",
    "d01c8bf1b6daf7f7f7b8e1864dac26",
    "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
    "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
    "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
    "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
    "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
    "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
  ).map(colors_default);
  var PiYG_default = ramp_default(scheme3);

  // node_modules/d3-scale-chromatic/src/diverging/PuOr.js
  var scheme4 = new Array(3).concat(
    "998ec3f7f7f7f1a340",
    "5e3c99b2abd2fdb863e66101",
    "5e3c99b2abd2f7f7f7fdb863e66101",
    "542788998ec3d8daebfee0b6f1a340b35806",
    "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
    "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
    "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
    "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
    "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
  ).map(colors_default);
  var PuOr_default = ramp_default(scheme4);

  // node_modules/d3-scale-chromatic/src/diverging/RdBu.js
  var scheme5 = new Array(3).concat(
    "ef8a62f7f7f767a9cf",
    "ca0020f4a58292c5de0571b0",
    "ca0020f4a582f7f7f792c5de0571b0",
    "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
    "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
    "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
    "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
    "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
    "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
  ).map(colors_default);
  var RdBu_default = ramp_default(scheme5);

  // node_modules/d3-scale-chromatic/src/diverging/RdGy.js
  var scheme6 = new Array(3).concat(
    "ef8a62ffffff999999",
    "ca0020f4a582bababa404040",
    "ca0020f4a582ffffffbababa404040",
    "b2182bef8a62fddbc7e0e0e09999994d4d4d",
    "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
    "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
    "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
    "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
    "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
  ).map(colors_default);
  var RdGy_default = ramp_default(scheme6);

  // node_modules/d3-scale-chromatic/src/diverging/RdYlBu.js
  var scheme7 = new Array(3).concat(
    "fc8d59ffffbf91bfdb",
    "d7191cfdae61abd9e92c7bb6",
    "d7191cfdae61ffffbfabd9e92c7bb6",
    "d73027fc8d59fee090e0f3f891bfdb4575b4",
    "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
    "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
    "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
    "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
    "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
  ).map(colors_default);
  var RdYlBu_default = ramp_default(scheme7);

  // node_modules/d3-scale-chromatic/src/diverging/RdYlGn.js
  var scheme8 = new Array(3).concat(
    "fc8d59ffffbf91cf60",
    "d7191cfdae61a6d96a1a9641",
    "d7191cfdae61ffffbfa6d96a1a9641",
    "d73027fc8d59fee08bd9ef8b91cf601a9850",
    "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
    "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
    "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
    "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
    "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
  ).map(colors_default);
  var RdYlGn_default = ramp_default(scheme8);

  // node_modules/d3-scale-chromatic/src/diverging/Spectral.js
  var scheme9 = new Array(3).concat(
    "fc8d59ffffbf99d594",
    "d7191cfdae61abdda42b83ba",
    "d7191cfdae61ffffbfabdda42b83ba",
    "d53e4ffc8d59fee08be6f59899d5943288bd",
    "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
    "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
    "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
    "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
    "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
  ).map(colors_default);
  var Spectral_default = ramp_default(scheme9);

  // node_modules/d3-scale-chromatic/src/sequential-multi/BuGn.js
  var scheme10 = new Array(3).concat(
    "e5f5f999d8c92ca25f",
    "edf8fbb2e2e266c2a4238b45",
    "edf8fbb2e2e266c2a42ca25f006d2c",
    "edf8fbccece699d8c966c2a42ca25f006d2c",
    "edf8fbccece699d8c966c2a441ae76238b45005824",
    "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
    "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
  ).map(colors_default);
  var BuGn_default = ramp_default(scheme10);

  // node_modules/d3-scale-chromatic/src/sequential-multi/BuPu.js
  var scheme11 = new Array(3).concat(
    "e0ecf49ebcda8856a7",
    "edf8fbb3cde38c96c688419d",
    "edf8fbb3cde38c96c68856a7810f7c",
    "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
    "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
    "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
    "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
  ).map(colors_default);
  var BuPu_default = ramp_default(scheme11);

  // node_modules/d3-scale-chromatic/src/sequential-multi/GnBu.js
  var scheme12 = new Array(3).concat(
    "e0f3dba8ddb543a2ca",
    "f0f9e8bae4bc7bccc42b8cbe",
    "f0f9e8bae4bc7bccc443a2ca0868ac",
    "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
    "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
    "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
    "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
  ).map(colors_default);
  var GnBu_default = ramp_default(scheme12);

  // node_modules/d3-scale-chromatic/src/sequential-multi/OrRd.js
  var scheme13 = new Array(3).concat(
    "fee8c8fdbb84e34a33",
    "fef0d9fdcc8afc8d59d7301f",
    "fef0d9fdcc8afc8d59e34a33b30000",
    "fef0d9fdd49efdbb84fc8d59e34a33b30000",
    "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
    "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
    "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
  ).map(colors_default);
  var OrRd_default = ramp_default(scheme13);

  // node_modules/d3-scale-chromatic/src/sequential-multi/PuBuGn.js
  var scheme14 = new Array(3).concat(
    "ece2f0a6bddb1c9099",
    "f6eff7bdc9e167a9cf02818a",
    "f6eff7bdc9e167a9cf1c9099016c59",
    "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
    "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
    "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
    "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
  ).map(colors_default);
  var PuBuGn_default = ramp_default(scheme14);

  // node_modules/d3-scale-chromatic/src/sequential-multi/PuBu.js
  var scheme15 = new Array(3).concat(
    "ece7f2a6bddb2b8cbe",
    "f1eef6bdc9e174a9cf0570b0",
    "f1eef6bdc9e174a9cf2b8cbe045a8d",
    "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
    "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
    "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
    "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
  ).map(colors_default);
  var PuBu_default = ramp_default(scheme15);

  // node_modules/d3-scale-chromatic/src/sequential-multi/PuRd.js
  var scheme16 = new Array(3).concat(
    "e7e1efc994c7dd1c77",
    "f1eef6d7b5d8df65b0ce1256",
    "f1eef6d7b5d8df65b0dd1c77980043",
    "f1eef6d4b9dac994c7df65b0dd1c77980043",
    "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
    "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
    "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
  ).map(colors_default);
  var PuRd_default = ramp_default(scheme16);

  // node_modules/d3-scale-chromatic/src/sequential-multi/RdPu.js
  var scheme17 = new Array(3).concat(
    "fde0ddfa9fb5c51b8a",
    "feebe2fbb4b9f768a1ae017e",
    "feebe2fbb4b9f768a1c51b8a7a0177",
    "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
    "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
    "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
    "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
  ).map(colors_default);
  var RdPu_default = ramp_default(scheme17);

  // node_modules/d3-scale-chromatic/src/sequential-multi/YlGnBu.js
  var scheme18 = new Array(3).concat(
    "edf8b17fcdbb2c7fb8",
    "ffffcca1dab441b6c4225ea8",
    "ffffcca1dab441b6c42c7fb8253494",
    "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
    "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
    "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
    "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
  ).map(colors_default);
  var YlGnBu_default = ramp_default(scheme18);

  // node_modules/d3-scale-chromatic/src/sequential-multi/YlGn.js
  var scheme19 = new Array(3).concat(
    "f7fcb9addd8e31a354",
    "ffffccc2e69978c679238443",
    "ffffccc2e69978c67931a354006837",
    "ffffccd9f0a3addd8e78c67931a354006837",
    "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
    "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
    "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
  ).map(colors_default);
  var YlGn_default = ramp_default(scheme19);

  // node_modules/d3-scale-chromatic/src/sequential-multi/YlOrBr.js
  var scheme20 = new Array(3).concat(
    "fff7bcfec44fd95f0e",
    "ffffd4fed98efe9929cc4c02",
    "ffffd4fed98efe9929d95f0e993404",
    "ffffd4fee391fec44ffe9929d95f0e993404",
    "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
    "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
    "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
  ).map(colors_default);
  var YlOrBr_default = ramp_default(scheme20);

  // node_modules/d3-scale-chromatic/src/sequential-multi/YlOrRd.js
  var scheme21 = new Array(3).concat(
    "ffeda0feb24cf03b20",
    "ffffb2fecc5cfd8d3ce31a1c",
    "ffffb2fecc5cfd8d3cf03b20bd0026",
    "ffffb2fed976feb24cfd8d3cf03b20bd0026",
    "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
    "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
    "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
  ).map(colors_default);
  var YlOrRd_default = ramp_default(scheme21);

  // node_modules/d3-scale-chromatic/src/sequential-single/Blues.js
  var scheme22 = new Array(3).concat(
    "deebf79ecae13182bd",
    "eff3ffbdd7e76baed62171b5",
    "eff3ffbdd7e76baed63182bd08519c",
    "eff3ffc6dbef9ecae16baed63182bd08519c",
    "eff3ffc6dbef9ecae16baed64292c62171b5084594",
    "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
    "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
  ).map(colors_default);
  var Blues_default = ramp_default(scheme22);

  // node_modules/d3-scale-chromatic/src/sequential-single/Greens.js
  var scheme23 = new Array(3).concat(
    "e5f5e0a1d99b31a354",
    "edf8e9bae4b374c476238b45",
    "edf8e9bae4b374c47631a354006d2c",
    "edf8e9c7e9c0a1d99b74c47631a354006d2c",
    "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
    "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
    "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
  ).map(colors_default);
  var Greens_default = ramp_default(scheme23);

  // node_modules/d3-scale-chromatic/src/sequential-single/Greys.js
  var scheme24 = new Array(3).concat(
    "f0f0f0bdbdbd636363",
    "f7f7f7cccccc969696525252",
    "f7f7f7cccccc969696636363252525",
    "f7f7f7d9d9d9bdbdbd969696636363252525",
    "f7f7f7d9d9d9bdbdbd969696737373525252252525",
    "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
    "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
  ).map(colors_default);
  var Greys_default = ramp_default(scheme24);

  // node_modules/d3-scale-chromatic/src/sequential-single/Purples.js
  var scheme25 = new Array(3).concat(
    "efedf5bcbddc756bb1",
    "f2f0f7cbc9e29e9ac86a51a3",
    "f2f0f7cbc9e29e9ac8756bb154278f",
    "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
    "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
    "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
    "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
  ).map(colors_default);
  var Purples_default = ramp_default(scheme25);

  // node_modules/d3-scale-chromatic/src/sequential-single/Reds.js
  var scheme26 = new Array(3).concat(
    "fee0d2fc9272de2d26",
    "fee5d9fcae91fb6a4acb181d",
    "fee5d9fcae91fb6a4ade2d26a50f15",
    "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
    "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
    "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
    "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
  ).map(colors_default);
  var Reds_default = ramp_default(scheme26);

  // node_modules/d3-scale-chromatic/src/sequential-single/Oranges.js
  var scheme27 = new Array(3).concat(
    "fee6cefdae6be6550d",
    "feeddefdbe85fd8d3cd94701",
    "feeddefdbe85fd8d3ce6550da63603",
    "feeddefdd0a2fdae6bfd8d3ce6550da63603",
    "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
    "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
    "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
  ).map(colors_default);
  var Oranges_default = ramp_default(scheme27);

  // node_modules/d3-scale-chromatic/src/sequential-multi/cubehelix.js
  var cubehelix_default2 = cubehelixLong(cubehelix(300, 0.5, 0), cubehelix(-240, 0.5, 1));

  // node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
  var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
  var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.5, 0.8));
  var c = cubehelix();

  // node_modules/d3-scale-chromatic/src/sequential-multi/sinebow.js
  var c2 = rgb();
  var pi_1_3 = Math.PI / 3;
  var pi_2_3 = Math.PI * 2 / 3;

  // node_modules/d3-scale-chromatic/src/sequential-multi/viridis.js
  function ramp(range) {
    var n = range.length;
    return function(t) {
      return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
  }
  var viridis_default = ramp(colors_default("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
  var magma = ramp(colors_default("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
  var inferno = ramp(colors_default("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
  var plasma = ramp(colors_default("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

  // node_modules/d3-shape/src/constant.js
  function constant_default12(x4) {
    return function constant() {
      return x4;
    };
  }

  // node_modules/d3-shape/src/math.js
  var abs2 = Math.abs;
  var atan22 = Math.atan2;
  var cos3 = Math.cos;
  var max2 = Math.max;
  var min = Math.min;
  var sin3 = Math.sin;
  var sqrt3 = Math.sqrt;
  var epsilon3 = 1e-12;
  var pi5 = Math.PI;
  var halfPi4 = pi5 / 2;
  var tau5 = 2 * pi5;
  function acos2(x4) {
    return x4 > 1 ? 0 : x4 < -1 ? pi5 : Math.acos(x4);
  }
  function asin2(x4) {
    return x4 >= 1 ? halfPi4 : x4 <= -1 ? -halfPi4 : Math.asin(x4);
  }

  // node_modules/d3-shape/src/arc.js
  function arcInnerRadius(d) {
    return d.innerRadius;
  }
  function arcOuterRadius(d) {
    return d.outerRadius;
  }
  function arcStartAngle(d) {
    return d.startAngle;
  }
  function arcEndAngle(d) {
    return d.endAngle;
  }
  function arcPadAngle(d) {
    return d && d.padAngle;
  }
  function intersect(x02, y0, x12, y1, x22, y22, x32, y32) {
    var x10 = x12 - x02, y10 = y1 - y0, x322 = x32 - x22, y322 = y32 - y22, t = y322 * x10 - x322 * y10;
    if (t * t < epsilon3)
      return;
    t = (x322 * (y0 - y22) - y322 * (x02 - x22)) / t;
    return [x02 + t * x10, y0 + t * y10];
  }
  function cornerTangents(x02, y0, x12, y1, r1, rc, cw) {
    var x01 = x02 - x12, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt3(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x02 + ox, y11 = y0 + oy, x10 = x12 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D2 = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt3(max2(0, r * r * d2 - D2 * D2)), cx0 = (D2 * dy - dx * d) / d2, cy0 = (-D2 * dx - dy * d) / d2, cx1 = (D2 * dy + dx * d) / d2, cy1 = (-D2 * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1)
      cx0 = cx1, cy0 = cy1;
    return {
      cx: cx0,
      cy: cy0,
      x01: -ox,
      y01: -oy,
      x11: cx0 * (r1 / r - 1),
      y11: cy0 * (r1 / r - 1)
    };
  }
  function arc_default() {
    var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant_default12(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null;
    function arc() {
      var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi4, a1 = endAngle.apply(this, arguments) - halfPi4, da = abs2(a1 - a0), cw = a1 > a0;
      if (!context)
        context = buffer = path_default();
      if (r1 < r0)
        r = r1, r1 = r0, r0 = r;
      if (!(r1 > epsilon3))
        context.moveTo(0, 0);
      else if (da > tau5 - epsilon3) {
        context.moveTo(r1 * cos3(a0), r1 * sin3(a0));
        context.arc(0, 0, r1, a0, a1, !cw);
        if (r0 > epsilon3) {
          context.moveTo(r0 * cos3(a1), r0 * sin3(a1));
          context.arc(0, 0, r0, a1, a0, cw);
        }
      } else {
        var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon3 && (padRadius ? +padRadius.apply(this, arguments) : sqrt3(r0 * r0 + r1 * r1)), rc = min(abs2(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t03, t13;
        if (rp > epsilon3) {
          var p0 = asin2(rp / r0 * sin3(ap)), p1 = asin2(rp / r1 * sin3(ap));
          if ((da0 -= p0 * 2) > epsilon3)
            p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
          else
            da0 = 0, a00 = a10 = (a0 + a1) / 2;
          if ((da1 -= p1 * 2) > epsilon3)
            p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
          else
            da1 = 0, a01 = a11 = (a0 + a1) / 2;
        }
        var x01 = r1 * cos3(a01), y01 = r1 * sin3(a01), x10 = r0 * cos3(a10), y10 = r0 * sin3(a10);
        if (rc > epsilon3) {
          var x11 = r1 * cos3(a11), y11 = r1 * sin3(a11), x00 = r0 * cos3(a00), y00 = r0 * sin3(a00), oc;
          if (da < pi5 && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
            var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin3(acos2((ax * bx + ay * by) / (sqrt3(ax * ax + ay * ay) * sqrt3(bx * bx + by * by))) / 2), lc = sqrt3(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = min(rc, (r0 - lc) / (kc - 1));
            rc1 = min(rc, (r1 - lc) / (kc + 1));
          }
        }
        if (!(da1 > epsilon3))
          context.moveTo(x01, y01);
        else if (rc1 > epsilon3) {
          t03 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
          t13 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
          context.moveTo(t03.cx + t03.x01, t03.cy + t03.y01);
          if (rc1 < rc)
            context.arc(t03.cx, t03.cy, rc1, atan22(t03.y01, t03.x01), atan22(t13.y01, t13.x01), !cw);
          else {
            context.arc(t03.cx, t03.cy, rc1, atan22(t03.y01, t03.x01), atan22(t03.y11, t03.x11), !cw);
            context.arc(0, 0, r1, atan22(t03.cy + t03.y11, t03.cx + t03.x11), atan22(t13.cy + t13.y11, t13.cx + t13.x11), !cw);
            context.arc(t13.cx, t13.cy, rc1, atan22(t13.y11, t13.x11), atan22(t13.y01, t13.x01), !cw);
          }
        } else
          context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
        if (!(r0 > epsilon3) || !(da0 > epsilon3))
          context.lineTo(x10, y10);
        else if (rc0 > epsilon3) {
          t03 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
          t13 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
          context.lineTo(t03.cx + t03.x01, t03.cy + t03.y01);
          if (rc0 < rc)
            context.arc(t03.cx, t03.cy, rc0, atan22(t03.y01, t03.x01), atan22(t13.y01, t13.x01), !cw);
          else {
            context.arc(t03.cx, t03.cy, rc0, atan22(t03.y01, t03.x01), atan22(t03.y11, t03.x11), !cw);
            context.arc(0, 0, r0, atan22(t03.cy + t03.y11, t03.cx + t03.x11), atan22(t13.cy + t13.y11, t13.cx + t13.x11), cw);
            context.arc(t13.cx, t13.cy, rc0, atan22(t13.y11, t13.x11), atan22(t13.y01, t13.x01), !cw);
          }
        } else
          context.arc(0, 0, r0, a10, a00, cw);
      }
      context.closePath();
      if (buffer)
        return context = null, buffer + "" || null;
    }
    arc.centroid = function() {
      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a2 = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi5 / 2;
      return [cos3(a2) * r, sin3(a2) * r];
    };
    arc.innerRadius = function(_) {
      return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant_default12(+_), arc) : innerRadius;
    };
    arc.outerRadius = function(_) {
      return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant_default12(+_), arc) : outerRadius;
    };
    arc.cornerRadius = function(_) {
      return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant_default12(+_), arc) : cornerRadius;
    };
    arc.padRadius = function(_) {
      return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant_default12(+_), arc) : padRadius;
    };
    arc.startAngle = function(_) {
      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default12(+_), arc) : startAngle;
    };
    arc.endAngle = function(_) {
      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default12(+_), arc) : endAngle;
    };
    arc.padAngle = function(_) {
      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default12(+_), arc) : padAngle;
    };
    arc.context = function(_) {
      return arguments.length ? (context = _ == null ? null : _, arc) : context;
    };
    return arc;
  }

  // node_modules/d3-shape/src/curve/linear.js
  function Linear(context) {
    this._context = context;
  }
  Linear.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x4, y4) {
      x4 = +x4, y4 = +y4;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(x4, y4);
          break;
      }
    }
  };
  function linear_default(context) {
    return new Linear(context);
  }

  // node_modules/d3-shape/src/curve/radial.js
  var curveRadialLinear = curveRadial(linear_default);
  function Radial(curve) {
    this._curve = curve;
  }
  Radial.prototype = {
    areaStart: function() {
      this._curve.areaStart();
    },
    areaEnd: function() {
      this._curve.areaEnd();
    },
    lineStart: function() {
      this._curve.lineStart();
    },
    lineEnd: function() {
      this._curve.lineEnd();
    },
    point: function(a2, r) {
      this._curve.point(r * Math.sin(a2), r * -Math.cos(a2));
    }
  };
  function curveRadial(curve) {
    function radial(context) {
      return new Radial(curve(context));
    }
    radial._curve = curve;
    return radial;
  }

  // node_modules/d3-shape/src/array.js
  var slice7 = Array.prototype.slice;

  // node_modules/d3-shape/src/symbol/diamond.js
  var tan30 = Math.sqrt(1 / 3);
  var tan30_2 = tan30 * 2;

  // node_modules/d3-shape/src/symbol/star.js
  var kr = Math.sin(pi5 / 10) / Math.sin(7 * pi5 / 10);
  var kx = Math.sin(tau5 / 10) * kr;
  var ky = -Math.cos(tau5 / 10) * kr;

  // node_modules/d3-shape/src/symbol/triangle.js
  var sqrt32 = Math.sqrt(3);

  // node_modules/d3-shape/src/symbol/wye.js
  var s = Math.sqrt(3) / 2;
  var k = 1 / Math.sqrt(12);
  var a = (k / 2 + 1) * 3;

  // node_modules/d3-shape/src/noop.js
  function noop_default2() {
  }

  // node_modules/d3-shape/src/curve/basis.js
  function point2(that, x4, y4) {
    that._context.bezierCurveTo(
      (2 * that._x0 + that._x1) / 3,
      (2 * that._y0 + that._y1) / 3,
      (that._x0 + 2 * that._x1) / 3,
      (that._y0 + 2 * that._y1) / 3,
      (that._x0 + 4 * that._x1 + x4) / 6,
      (that._y0 + 4 * that._y1 + y4) / 6
    );
  }
  function Basis(context) {
    this._context = context;
  }
  Basis.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 3:
          point2(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x4, y4) {
      x4 = +x4, y4 = +y4;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
        default:
          point2(this, x4, y4);
          break;
      }
      this._x0 = this._x1, this._x1 = x4;
      this._y0 = this._y1, this._y1 = y4;
    }
  };

  // node_modules/d3-shape/src/curve/basisClosed.js
  function BasisClosed(context) {
    this._context = context;
  }
  BasisClosed.prototype = {
    areaStart: noop_default2,
    areaEnd: noop_default2,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x2, this._y2);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x2, this._y2);
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          break;
        }
      }
    },
    point: function(x4, y4) {
      x4 = +x4, y4 = +y4;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x2 = x4, this._y2 = y4;
          break;
        case 1:
          this._point = 2;
          this._x3 = x4, this._y3 = y4;
          break;
        case 2:
          this._point = 3;
          this._x4 = x4, this._y4 = y4;
          this._context.moveTo((this._x0 + 4 * this._x1 + x4) / 6, (this._y0 + 4 * this._y1 + y4) / 6);
          break;
        default:
          point2(this, x4, y4);
          break;
      }
      this._x0 = this._x1, this._x1 = x4;
      this._y0 = this._y1, this._y1 = y4;
    }
  };

  // node_modules/d3-shape/src/curve/basisOpen.js
  function BasisOpen(context) {
    this._context = context;
  }
  BasisOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 3)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x4, y4) {
      x4 = +x4, y4 = +y4;
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var x02 = (this._x0 + 4 * this._x1 + x4) / 6, y0 = (this._y0 + 4 * this._y1 + y4) / 6;
          this._line ? this._context.lineTo(x02, y0) : this._context.moveTo(x02, y0);
          break;
        case 3:
          this._point = 4;
        default:
          point2(this, x4, y4);
          break;
      }
      this._x0 = this._x1, this._x1 = x4;
      this._y0 = this._y1, this._y1 = y4;
    }
  };

  // node_modules/d3-shape/src/curve/bundle.js
  function Bundle(context, beta) {
    this._basis = new Basis(context);
    this._beta = beta;
  }
  Bundle.prototype = {
    lineStart: function() {
      this._x = [];
      this._y = [];
      this._basis.lineStart();
    },
    lineEnd: function() {
      var x4 = this._x, y4 = this._y, j = x4.length - 1;
      if (j > 0) {
        var x02 = x4[0], y0 = y4[0], dx = x4[j] - x02, dy = y4[j] - y0, i = -1, t;
        while (++i <= j) {
          t = i / j;
          this._basis.point(
            this._beta * x4[i] + (1 - this._beta) * (x02 + t * dx),
            this._beta * y4[i] + (1 - this._beta) * (y0 + t * dy)
          );
        }
      }
      this._x = this._y = null;
      this._basis.lineEnd();
    },
    point: function(x4, y4) {
      this._x.push(+x4);
      this._y.push(+y4);
    }
  };
  var bundle_default = function custom12(beta) {
    function bundle(context) {
      return beta === 1 ? new Basis(context) : new Bundle(context, beta);
    }
    bundle.beta = function(beta2) {
      return custom12(+beta2);
    };
    return bundle;
  }(0.85);

  // node_modules/d3-shape/src/curve/cardinal.js
  function point3(that, x4, y4) {
    that._context.bezierCurveTo(
      that._x1 + that._k * (that._x2 - that._x0),
      that._y1 + that._k * (that._y2 - that._y0),
      that._x2 + that._k * (that._x1 - x4),
      that._y2 + that._k * (that._y1 - y4),
      that._x2,
      that._y2
    );
  }
  function Cardinal(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  Cardinal.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          point3(this, this._x1, this._y1);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x4, y4) {
      x4 = +x4, y4 = +y4;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
          break;
        case 1:
          this._point = 2;
          this._x1 = x4, this._y1 = y4;
          break;
        case 2:
          this._point = 3;
        default:
          point3(this, x4, y4);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
    }
  };
  var cardinal_default = function custom13(tension) {
    function cardinal(context) {
      return new Cardinal(context, tension);
    }
    cardinal.tension = function(tension2) {
      return custom13(+tension2);
    };
    return cardinal;
  }(0);

  // node_modules/d3-shape/src/curve/cardinalClosed.js
  function CardinalClosed(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  CardinalClosed.prototype = {
    areaStart: noop_default2,
    areaEnd: noop_default2,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function(x4, y4) {
      x4 = +x4, y4 = +y4;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x3 = x4, this._y3 = y4;
          break;
        case 1:
          this._point = 2;
          this._context.moveTo(this._x4 = x4, this._y4 = y4);
          break;
        case 2:
          this._point = 3;
          this._x5 = x4, this._y5 = y4;
          break;
        default:
          point3(this, x4, y4);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
    }
  };
  var cardinalClosed_default = function custom14(tension) {
    function cardinal(context) {
      return new CardinalClosed(context, tension);
    }
    cardinal.tension = function(tension2) {
      return custom14(+tension2);
    };
    return cardinal;
  }(0);

  // node_modules/d3-shape/src/curve/cardinalOpen.js
  function CardinalOpen(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
  }
  CardinalOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 3)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x4, y4) {
      x4 = +x4, y4 = +y4;
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          point3(this, x4, y4);
          break;
      }
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
    }
  };
  var cardinalOpen_default = function custom15(tension) {
    function cardinal(context) {
      return new CardinalOpen(context, tension);
    }
    cardinal.tension = function(tension2) {
      return custom15(+tension2);
    };
    return cardinal;
  }(0);

  // node_modules/d3-shape/src/curve/catmullRom.js
  function point4(that, x4, y4) {
    var x12 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
    if (that._l01_a > epsilon3) {
      var a2 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
      x12 = (x12 * a2 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
      y1 = (y1 * a2 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
    }
    if (that._l23_a > epsilon3) {
      var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
      x22 = (x22 * b + that._x1 * that._l23_2a - x4 * that._l12_2a) / m;
      y22 = (y22 * b + that._y1 * that._l23_2a - y4 * that._l12_2a) / m;
    }
    that._context.bezierCurveTo(x12, y1, x22, y22, that._x2, that._y2);
  }
  function CatmullRom(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  CatmullRom.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2);
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x4, y4) {
      x4 = +x4, y4 = +y4;
      if (this._point) {
        var x23 = this._x2 - x4, y23 = this._y2 - y4;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          point4(this, x4, y4);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
    }
  };
  var catmullRom_default = function custom16(alpha) {
    function catmullRom(context) {
      return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
    }
    catmullRom.alpha = function(alpha2) {
      return custom16(+alpha2);
    };
    return catmullRom;
  }(0.5);

  // node_modules/d3-shape/src/curve/catmullRomClosed.js
  function CatmullRomClosed(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  CatmullRomClosed.prototype = {
    areaStart: noop_default2,
    areaEnd: noop_default2,
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 1: {
          this._context.moveTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 2: {
          this._context.lineTo(this._x3, this._y3);
          this._context.closePath();
          break;
        }
        case 3: {
          this.point(this._x3, this._y3);
          this.point(this._x4, this._y4);
          this.point(this._x5, this._y5);
          break;
        }
      }
    },
    point: function(x4, y4) {
      x4 = +x4, y4 = +y4;
      if (this._point) {
        var x23 = this._x2 - x4, y23 = this._y2 - y4;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          this._x3 = x4, this._y3 = y4;
          break;
        case 1:
          this._point = 2;
          this._context.moveTo(this._x4 = x4, this._y4 = y4);
          break;
        case 2:
          this._point = 3;
          this._x5 = x4, this._y5 = y4;
          break;
        default:
          point4(this, x4, y4);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
    }
  };
  var catmullRomClosed_default = function custom17(alpha) {
    function catmullRom(context) {
      return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
    }
    catmullRom.alpha = function(alpha2) {
      return custom17(+alpha2);
    };
    return catmullRom;
  }(0.5);

  // node_modules/d3-shape/src/curve/catmullRomOpen.js
  function CatmullRomOpen(context, alpha) {
    this._context = context;
    this._alpha = alpha;
  }
  CatmullRomOpen.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
      this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
      if (this._line || this._line !== 0 && this._point === 3)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x4, y4) {
      x4 = +x4, y4 = +y4;
      if (this._point) {
        var x23 = this._x2 - x4, y23 = this._y2 - y4;
        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          point4(this, x4, y4);
          break;
      }
      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x4;
      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y4;
    }
  };
  var catmullRomOpen_default = function custom18(alpha) {
    function catmullRom(context) {
      return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
    }
    catmullRom.alpha = function(alpha2) {
      return custom18(+alpha2);
    };
    return catmullRom;
  }(0.5);

  // node_modules/d3-shape/src/curve/linearClosed.js
  function LinearClosed(context) {
    this._context = context;
  }
  LinearClosed.prototype = {
    areaStart: noop_default2,
    areaEnd: noop_default2,
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._point)
        this._context.closePath();
    },
    point: function(x4, y4) {
      x4 = +x4, y4 = +y4;
      if (this._point)
        this._context.lineTo(x4, y4);
      else
        this._point = 1, this._context.moveTo(x4, y4);
    }
  };

  // node_modules/d3-shape/src/curve/monotone.js
  function sign2(x4) {
    return x4 < 0 ? -1 : 1;
  }
  function slope3(that, x22, y22) {
    var h0 = that._x1 - that._x0, h1 = x22 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y22 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
    return (sign2(s0) + sign2(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
  }
  function slope2(that, t) {
    var h = that._x1 - that._x0;
    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
  }
  function point5(that, t03, t13) {
    var x02 = that._x0, y0 = that._y0, x12 = that._x1, y1 = that._y1, dx = (x12 - x02) / 3;
    that._context.bezierCurveTo(x02 + dx, y0 + dx * t03, x12 - dx, y1 - dx * t13, x12, y1);
  }
  function MonotoneX(context) {
    this._context = context;
  }
  MonotoneX.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          point5(this, this._t0, slope2(this, this._t0));
          break;
      }
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x4, y4) {
      var t13 = NaN;
      x4 = +x4, y4 = +y4;
      if (x4 === this._x1 && y4 === this._y1)
        return;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          point5(this, slope2(this, t13 = slope3(this, x4, y4)), t13);
          break;
        default:
          point5(this, this._t0, t13 = slope3(this, x4, y4));
          break;
      }
      this._x0 = this._x1, this._x1 = x4;
      this._y0 = this._y1, this._y1 = y4;
      this._t0 = t13;
    }
  };
  function MonotoneY(context) {
    this._context = new ReflectContext(context);
  }
  (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x4, y4) {
    MonotoneX.prototype.point.call(this, y4, x4);
  };
  function ReflectContext(context) {
    this._context = context;
  }
  ReflectContext.prototype = {
    moveTo: function(x4, y4) {
      this._context.moveTo(y4, x4);
    },
    closePath: function() {
      this._context.closePath();
    },
    lineTo: function(x4, y4) {
      this._context.lineTo(y4, x4);
    },
    bezierCurveTo: function(x12, y1, x22, y22, x4, y4) {
      this._context.bezierCurveTo(y1, x12, y22, x22, y4, x4);
    }
  };

  // node_modules/d3-shape/src/curve/natural.js
  function Natural(context) {
    this._context = context;
  }
  Natural.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = [];
      this._y = [];
    },
    lineEnd: function() {
      var x4 = this._x, y4 = this._y, n = x4.length;
      if (n) {
        this._line ? this._context.lineTo(x4[0], y4[0]) : this._context.moveTo(x4[0], y4[0]);
        if (n === 2) {
          this._context.lineTo(x4[1], y4[1]);
        } else {
          var px = controlPoints(x4), py = controlPoints(y4);
          for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
            this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x4[i1], y4[i1]);
          }
        }
      }
      if (this._line || this._line !== 0 && n === 1)
        this._context.closePath();
      this._line = 1 - this._line;
      this._x = this._y = null;
    },
    point: function(x4, y4) {
      this._x.push(+x4);
      this._y.push(+y4);
    }
  };
  function controlPoints(x4) {
    var i, n = x4.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
    a2[0] = 0, b[0] = 2, r[0] = x4[0] + 2 * x4[1];
    for (i = 1; i < n - 1; ++i)
      a2[i] = 1, b[i] = 4, r[i] = 4 * x4[i] + 2 * x4[i + 1];
    a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x4[n - 1] + x4[n];
    for (i = 1; i < n; ++i)
      m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
    a2[n - 1] = r[n - 1] / b[n - 1];
    for (i = n - 2; i >= 0; --i)
      a2[i] = (r[i] - a2[i + 1]) / b[i];
    b[n - 1] = (x4[n] + a2[n - 1]) / 2;
    for (i = 0; i < n - 1; ++i)
      b[i] = 2 * x4[i + 1] - a2[i + 1];
    return [a2, b];
  }

  // node_modules/d3-shape/src/curve/step.js
  function Step(context, t) {
    this._context = context;
    this._t = t;
  }
  Step.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x = this._y = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      if (0 < this._t && this._t < 1 && this._point === 2)
        this._context.lineTo(this._x, this._y);
      if (this._line || this._line !== 0 && this._point === 1)
        this._context.closePath();
      if (this._line >= 0)
        this._t = 1 - this._t, this._line = 1 - this._line;
    },
    point: function(x4, y4) {
      x4 = +x4, y4 = +y4;
      switch (this._point) {
        case 0:
          this._point = 1;
          this._line ? this._context.lineTo(x4, y4) : this._context.moveTo(x4, y4);
          break;
        case 1:
          this._point = 2;
        default: {
          if (this._t <= 0) {
            this._context.lineTo(this._x, y4);
            this._context.lineTo(x4, y4);
          } else {
            var x12 = this._x * (1 - this._t) + x4 * this._t;
            this._context.lineTo(x12, this._y);
            this._context.lineTo(x12, y4);
          }
          break;
        }
      }
      this._x = x4, this._y = y4;
    }
  };

  // node_modules/d3-voronoi/src/RedBlackTree.js
  function RedBlackTree() {
    this._ = null;
  }
  function RedBlackNode(node) {
    node.U = // parent node
    node.C = // color - true for red, false for black
    node.L = // left node
    node.R = // right node
    node.P = // previous node
    node.N = null;
  }
  RedBlackTree.prototype = {
    constructor: RedBlackTree,
    insert: function(after, node) {
      var parent, grandpa, uncle;
      if (after) {
        node.P = after;
        node.N = after.N;
        if (after.N)
          after.N.P = node;
        after.N = node;
        if (after.R) {
          after = after.R;
          while (after.L)
            after = after.L;
          after.L = node;
        } else {
          after.R = node;
        }
        parent = after;
      } else if (this._) {
        after = RedBlackFirst(this._);
        node.P = null;
        node.N = after;
        after.P = after.L = node;
        parent = after;
      } else {
        node.P = node.N = null;
        this._ = node;
        parent = null;
      }
      node.L = node.R = null;
      node.U = parent;
      node.C = true;
      after = node;
      while (parent && parent.C) {
        grandpa = parent.U;
        if (parent === grandpa.L) {
          uncle = grandpa.R;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.R) {
              RedBlackRotateLeft(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            RedBlackRotateRight(this, grandpa);
          }
        } else {
          uncle = grandpa.L;
          if (uncle && uncle.C) {
            parent.C = uncle.C = false;
            grandpa.C = true;
            after = grandpa;
          } else {
            if (after === parent.L) {
              RedBlackRotateRight(this, parent);
              after = parent;
              parent = after.U;
            }
            parent.C = false;
            grandpa.C = true;
            RedBlackRotateLeft(this, grandpa);
          }
        }
        parent = after.U;
      }
      this._.C = false;
    },
    remove: function(node) {
      if (node.N)
        node.N.P = node.P;
      if (node.P)
        node.P.N = node.N;
      node.N = node.P = null;
      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
      if (!left)
        next = right;
      else if (!right)
        next = left;
      else
        next = RedBlackFirst(right);
      if (parent) {
        if (parent.L === node)
          parent.L = next;
        else
          parent.R = next;
      } else {
        this._ = next;
      }
      if (left && right) {
        red = next.C;
        next.C = node.C;
        next.L = left;
        left.U = next;
        if (next !== right) {
          parent = next.U;
          next.U = node.U;
          node = next.R;
          parent.L = node;
          next.R = right;
          right.U = next;
        } else {
          next.U = parent;
          parent = next;
          node = next.R;
        }
      } else {
        red = node.C;
        node = next;
      }
      if (node)
        node.U = parent;
      if (red)
        return;
      if (node && node.C) {
        node.C = false;
        return;
      }
      do {
        if (node === this._)
          break;
        if (node === parent.L) {
          sibling = parent.R;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            RedBlackRotateLeft(this, parent);
            sibling = parent.R;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.R || !sibling.R.C) {
              sibling.L.C = false;
              sibling.C = true;
              RedBlackRotateRight(this, sibling);
              sibling = parent.R;
            }
            sibling.C = parent.C;
            parent.C = sibling.R.C = false;
            RedBlackRotateLeft(this, parent);
            node = this._;
            break;
          }
        } else {
          sibling = parent.L;
          if (sibling.C) {
            sibling.C = false;
            parent.C = true;
            RedBlackRotateRight(this, parent);
            sibling = parent.L;
          }
          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
            if (!sibling.L || !sibling.L.C) {
              sibling.R.C = false;
              sibling.C = true;
              RedBlackRotateLeft(this, sibling);
              sibling = parent.L;
            }
            sibling.C = parent.C;
            parent.C = sibling.L.C = false;
            RedBlackRotateRight(this, parent);
            node = this._;
            break;
          }
        }
        sibling.C = true;
        node = parent;
        parent = parent.U;
      } while (!node.C);
      if (node)
        node.C = false;
    }
  };
  function RedBlackRotateLeft(tree, node) {
    var p = node, q = node.R, parent = p.U;
    if (parent) {
      if (parent.L === p)
        parent.L = q;
      else
        parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R)
      p.R.U = p;
    q.L = p;
  }
  function RedBlackRotateRight(tree, node) {
    var p = node, q = node.L, parent = p.U;
    if (parent) {
      if (parent.L === p)
        parent.L = q;
      else
        parent.R = q;
    } else {
      tree._ = q;
    }
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L)
      p.L.U = p;
    q.R = p;
  }
  function RedBlackFirst(node) {
    while (node.L)
      node = node.L;
    return node;
  }
  var RedBlackTree_default = RedBlackTree;

  // node_modules/d3-voronoi/src/Edge.js
  function createEdge(left, right, v0, v1) {
    var edge = [null, null], index = edges.push(edge) - 1;
    edge.left = left;
    edge.right = right;
    if (v0)
      setEdgeEnd(edge, left, right, v0);
    if (v1)
      setEdgeEnd(edge, right, left, v1);
    cells[left.index].halfedges.push(index);
    cells[right.index].halfedges.push(index);
    return edge;
  }
  function createBorderEdge(left, v0, v1) {
    var edge = [v0, v1];
    edge.left = left;
    return edge;
  }
  function setEdgeEnd(edge, left, right, vertex) {
    if (!edge[0] && !edge[1]) {
      edge[0] = vertex;
      edge.left = left;
      edge.right = right;
    } else if (edge.left === right) {
      edge[1] = vertex;
    } else {
      edge[0] = vertex;
    }
  }
  function clipEdge(edge, x02, y0, x12, y1) {
    var a2 = edge[0], b = edge[1], ax = a2[0], ay = a2[1], bx = b[0], by = b[1], t03 = 0, t13 = 1, dx = bx - ax, dy = by - ay, r;
    r = x02 - ax;
    if (!dx && r > 0)
      return;
    r /= dx;
    if (dx < 0) {
      if (r < t03)
        return;
      if (r < t13)
        t13 = r;
    } else if (dx > 0) {
      if (r > t13)
        return;
      if (r > t03)
        t03 = r;
    }
    r = x12 - ax;
    if (!dx && r < 0)
      return;
    r /= dx;
    if (dx < 0) {
      if (r > t13)
        return;
      if (r > t03)
        t03 = r;
    } else if (dx > 0) {
      if (r < t03)
        return;
      if (r < t13)
        t13 = r;
    }
    r = y0 - ay;
    if (!dy && r > 0)
      return;
    r /= dy;
    if (dy < 0) {
      if (r < t03)
        return;
      if (r < t13)
        t13 = r;
    } else if (dy > 0) {
      if (r > t13)
        return;
      if (r > t03)
        t03 = r;
    }
    r = y1 - ay;
    if (!dy && r < 0)
      return;
    r /= dy;
    if (dy < 0) {
      if (r > t13)
        return;
      if (r > t03)
        t03 = r;
    } else if (dy > 0) {
      if (r < t03)
        return;
      if (r < t13)
        t13 = r;
    }
    if (!(t03 > 0) && !(t13 < 1))
      return true;
    if (t03 > 0)
      edge[0] = [ax + t03 * dx, ay + t03 * dy];
    if (t13 < 1)
      edge[1] = [ax + t13 * dx, ay + t13 * dy];
    return true;
  }
  function connectEdge(edge, x02, y0, x12, y1) {
    var v1 = edge[1];
    if (v1)
      return true;
    var v0 = edge[0], left = edge.left, right = edge.right, lx = left[0], ly = left[1], rx = right[0], ry = right[1], fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
    if (ry === ly) {
      if (fx < x02 || fx >= x12)
        return;
      if (lx > rx) {
        if (!v0)
          v0 = [fx, y0];
        else if (v0[1] >= y1)
          return;
        v1 = [fx, y1];
      } else {
        if (!v0)
          v0 = [fx, y1];
        else if (v0[1] < y0)
          return;
        v1 = [fx, y0];
      }
    } else {
      fm = (lx - rx) / (ry - ly);
      fb = fy - fm * fx;
      if (fm < -1 || fm > 1) {
        if (lx > rx) {
          if (!v0)
            v0 = [(y0 - fb) / fm, y0];
          else if (v0[1] >= y1)
            return;
          v1 = [(y1 - fb) / fm, y1];
        } else {
          if (!v0)
            v0 = [(y1 - fb) / fm, y1];
          else if (v0[1] < y0)
            return;
          v1 = [(y0 - fb) / fm, y0];
        }
      } else {
        if (ly < ry) {
          if (!v0)
            v0 = [x02, fm * x02 + fb];
          else if (v0[0] >= x12)
            return;
          v1 = [x12, fm * x12 + fb];
        } else {
          if (!v0)
            v0 = [x12, fm * x12 + fb];
          else if (v0[0] < x02)
            return;
          v1 = [x02, fm * x02 + fb];
        }
      }
    }
    edge[0] = v0;
    edge[1] = v1;
    return true;
  }
  function clipEdges(x02, y0, x12, y1) {
    var i = edges.length, edge;
    while (i--) {
      if (!connectEdge(edge = edges[i], x02, y0, x12, y1) || !clipEdge(edge, x02, y0, x12, y1) || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon4 || Math.abs(edge[0][1] - edge[1][1]) > epsilon4)) {
        delete edges[i];
      }
    }
  }

  // node_modules/d3-voronoi/src/Cell.js
  function createCell(site) {
    return cells[site.index] = {
      site,
      halfedges: []
    };
  }
  function cellHalfedgeAngle(cell, edge) {
    var site = cell.site, va = edge.left, vb = edge.right;
    if (site === vb)
      vb = va, va = site;
    if (vb)
      return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
    if (site === va)
      va = edge[1], vb = edge[0];
    else
      va = edge[0], vb = edge[1];
    return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
  }
  function cellHalfedgeStart(cell, edge) {
    return edge[+(edge.left !== cell.site)];
  }
  function cellHalfedgeEnd(cell, edge) {
    return edge[+(edge.left === cell.site)];
  }
  function sortCellHalfedges() {
    for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
      if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
        var index = new Array(m), array4 = new Array(m);
        for (j = 0; j < m; ++j)
          index[j] = j, array4[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
        index.sort(function(i2, j2) {
          return array4[j2] - array4[i2];
        });
        for (j = 0; j < m; ++j)
          array4[j] = halfedges[index[j]];
        for (j = 0; j < m; ++j)
          halfedges[j] = array4[j];
      }
    }
  }
  function clipCells(x02, y0, x12, y1) {
    var nCells = cells.length, iCell, cell, site, iHalfedge, halfedges, nHalfedges, start2, startX, startY, end, endX, endY, cover = true;
    for (iCell = 0; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        site = cell.site;
        halfedges = cell.halfedges;
        iHalfedge = halfedges.length;
        while (iHalfedge--) {
          if (!edges[halfedges[iHalfedge]]) {
            halfedges.splice(iHalfedge, 1);
          }
        }
        iHalfedge = 0, nHalfedges = halfedges.length;
        while (iHalfedge < nHalfedges) {
          end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
          start2 = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start2[0], startY = start2[1];
          if (Math.abs(endX - startX) > epsilon4 || Math.abs(endY - startY) > epsilon4) {
            halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(
              site,
              end,
              Math.abs(endX - x02) < epsilon4 && y1 - endY > epsilon4 ? [x02, Math.abs(startX - x02) < epsilon4 ? startY : y1] : Math.abs(endY - y1) < epsilon4 && x12 - endX > epsilon4 ? [Math.abs(startY - y1) < epsilon4 ? startX : x12, y1] : Math.abs(endX - x12) < epsilon4 && endY - y0 > epsilon4 ? [x12, Math.abs(startX - x12) < epsilon4 ? startY : y0] : Math.abs(endY - y0) < epsilon4 && endX - x02 > epsilon4 ? [Math.abs(startY - y0) < epsilon4 ? startX : x02, y0] : null
            )) - 1);
            ++nHalfedges;
          }
        }
        if (nHalfedges)
          cover = false;
      }
    }
    if (cover) {
      var dx, dy, d2, dc = Infinity;
      for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
        if (cell = cells[iCell]) {
          site = cell.site;
          dx = site[0] - x02;
          dy = site[1] - y0;
          d2 = dx * dx + dy * dy;
          if (d2 < dc)
            dc = d2, cover = cell;
        }
      }
      if (cover) {
        var v00 = [x02, y0], v01 = [x02, y1], v11 = [x12, y1], v10 = [x12, y0];
        cover.halfedges.push(
          edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
          edges.push(createBorderEdge(site, v01, v11)) - 1,
          edges.push(createBorderEdge(site, v11, v10)) - 1,
          edges.push(createBorderEdge(site, v10, v00)) - 1
        );
      }
    }
    for (iCell = 0; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        if (!cell.halfedges.length) {
          delete cells[iCell];
        }
      }
    }
  }

  // node_modules/d3-voronoi/src/Circle.js
  var circlePool = [];
  var firstCircle;
  function Circle() {
    RedBlackNode(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
  }
  function attachCircle(arc) {
    var lArc = arc.P, rArc = arc.N;
    if (!lArc || !rArc)
      return;
    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
    if (lSite === rSite)
      return;
    var bx = cSite[0], by = cSite[1], ax = lSite[0] - bx, ay = lSite[1] - by, cx = rSite[0] - bx, cy = rSite[1] - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -epsilon23)
      return;
    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x4 = (cy * ha - ay * hc) / d, y4 = (ax * hc - cx * ha) / d;
    var circle2 = circlePool.pop() || new Circle();
    circle2.arc = arc;
    circle2.site = cSite;
    circle2.x = x4 + bx;
    circle2.y = (circle2.cy = y4 + by) + Math.sqrt(x4 * x4 + y4 * y4);
    arc.circle = circle2;
    var before = null, node = circles._;
    while (node) {
      if (circle2.y < node.y || circle2.y === node.y && circle2.x <= node.x) {
        if (node.L)
          node = node.L;
        else {
          before = node.P;
          break;
        }
      } else {
        if (node.R)
          node = node.R;
        else {
          before = node;
          break;
        }
      }
    }
    circles.insert(before, circle2);
    if (!before)
      firstCircle = circle2;
  }
  function detachCircle(arc) {
    var circle2 = arc.circle;
    if (circle2) {
      if (!circle2.P)
        firstCircle = circle2.N;
      circles.remove(circle2);
      circlePool.push(circle2);
      RedBlackNode(circle2);
      arc.circle = null;
    }
  }

  // node_modules/d3-voronoi/src/Beach.js
  var beachPool = [];
  function Beach() {
    RedBlackNode(this);
    this.edge = this.site = this.circle = null;
  }
  function createBeach(site) {
    var beach = beachPool.pop() || new Beach();
    beach.site = site;
    return beach;
  }
  function detachBeach(beach) {
    detachCircle(beach);
    beaches.remove(beach);
    beachPool.push(beach);
    RedBlackNode(beach);
  }
  function removeBeach(beach) {
    var circle2 = beach.circle, x4 = circle2.x, y4 = circle2.cy, vertex = [x4, y4], previous = beach.P, next = beach.N, disappearing = [beach];
    detachBeach(beach);
    var lArc = previous;
    while (lArc.circle && Math.abs(x4 - lArc.circle.x) < epsilon4 && Math.abs(y4 - lArc.circle.cy) < epsilon4) {
      previous = lArc.P;
      disappearing.unshift(lArc);
      detachBeach(lArc);
      lArc = previous;
    }
    disappearing.unshift(lArc);
    detachCircle(lArc);
    var rArc = next;
    while (rArc.circle && Math.abs(x4 - rArc.circle.x) < epsilon4 && Math.abs(y4 - rArc.circle.cy) < epsilon4) {
      next = rArc.N;
      disappearing.push(rArc);
      detachBeach(rArc);
      rArc = next;
    }
    disappearing.push(rArc);
    detachCircle(rArc);
    var nArcs = disappearing.length, iArc;
    for (iArc = 1; iArc < nArcs; ++iArc) {
      rArc = disappearing[iArc];
      lArc = disappearing[iArc - 1];
      setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);
    attachCircle(lArc);
    attachCircle(rArc);
  }
  function addBeach(site) {
    var x4 = site[0], directrix = site[1], lArc, rArc, dxl, dxr, node = beaches._;
    while (node) {
      dxl = leftBreakPoint(node, directrix) - x4;
      if (dxl > epsilon4)
        node = node.L;
      else {
        dxr = x4 - rightBreakPoint(node, directrix);
        if (dxr > epsilon4) {
          if (!node.R) {
            lArc = node;
            break;
          }
          node = node.R;
        } else {
          if (dxl > -epsilon4) {
            lArc = node.P;
            rArc = node;
          } else if (dxr > -epsilon4) {
            lArc = node;
            rArc = node.N;
          } else {
            lArc = rArc = node;
          }
          break;
        }
      }
    }
    createCell(site);
    var newArc = createBeach(site);
    beaches.insert(lArc, newArc);
    if (!lArc && !rArc)
      return;
    if (lArc === rArc) {
      detachCircle(lArc);
      rArc = createBeach(lArc.site);
      beaches.insert(newArc, rArc);
      newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
      attachCircle(lArc);
      attachCircle(rArc);
      return;
    }
    if (!rArc) {
      newArc.edge = createEdge(lArc.site, newArc.site);
      return;
    }
    detachCircle(lArc);
    detachCircle(rArc);
    var lSite = lArc.site, ax = lSite[0], ay = lSite[1], bx = site[0] - ax, by = site[1] - ay, rSite = rArc.site, cx = rSite[0] - ax, cy = rSite[1] - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];
    setEdgeEnd(rArc.edge, lSite, rSite, vertex);
    newArc.edge = createEdge(lSite, site, null, vertex);
    rArc.edge = createEdge(site, rSite, null, vertex);
    attachCircle(lArc);
    attachCircle(rArc);
  }
  function leftBreakPoint(arc, directrix) {
    var site = arc.site, rfocx = site[0], rfocy = site[1], pby2 = rfocy - directrix;
    if (!pby2)
      return rfocx;
    var lArc = arc.P;
    if (!lArc)
      return -Infinity;
    site = lArc.site;
    var lfocx = site[0], lfocy = site[1], plby2 = lfocy - directrix;
    if (!plby2)
      return lfocx;
    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
    if (aby2)
      return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
  }
  function rightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc)
      return leftBreakPoint(rArc, directrix);
    var site = arc.site;
    return site[1] === directrix ? site[0] : Infinity;
  }

  // node_modules/d3-voronoi/src/Diagram.js
  var epsilon4 = 1e-6;
  var epsilon23 = 1e-12;
  var beaches;
  var cells;
  var circles;
  var edges;
  function triangleArea(a2, b, c3) {
    return (a2[0] - c3[0]) * (b[1] - a2[1]) - (a2[0] - b[0]) * (c3[1] - a2[1]);
  }
  function lexicographic(a2, b) {
    return b[1] - a2[1] || b[0] - a2[0];
  }
  function Diagram(sites, extent) {
    var site = sites.sort(lexicographic).pop(), x4, y4, circle2;
    edges = [];
    cells = new Array(sites.length);
    beaches = new RedBlackTree_default();
    circles = new RedBlackTree_default();
    while (true) {
      circle2 = firstCircle;
      if (site && (!circle2 || site[1] < circle2.y || site[1] === circle2.y && site[0] < circle2.x)) {
        if (site[0] !== x4 || site[1] !== y4) {
          addBeach(site);
          x4 = site[0], y4 = site[1];
        }
        site = sites.pop();
      } else if (circle2) {
        removeBeach(circle2.arc);
      } else {
        break;
      }
    }
    sortCellHalfedges();
    if (extent) {
      var x02 = +extent[0][0], y0 = +extent[0][1], x12 = +extent[1][0], y1 = +extent[1][1];
      clipEdges(x02, y0, x12, y1);
      clipCells(x02, y0, x12, y1);
    }
    this.edges = edges;
    this.cells = cells;
    beaches = circles = edges = cells = null;
  }
  Diagram.prototype = {
    constructor: Diagram,
    polygons: function() {
      var edges2 = this.edges;
      return this.cells.map(function(cell) {
        var polygon = cell.halfedges.map(function(i) {
          return cellHalfedgeStart(cell, edges2[i]);
        });
        polygon.data = cell.site.data;
        return polygon;
      });
    },
    triangles: function() {
      var triangles = [], edges2 = this.edges;
      this.cells.forEach(function(cell, i) {
        if (!(m = (halfedges = cell.halfedges).length))
          return;
        var site = cell.site, halfedges, j = -1, m, s0, e1 = edges2[halfedges[m - 1]], s1 = e1.left === site ? e1.right : e1.left;
        while (++j < m) {
          s0 = s1;
          e1 = edges2[halfedges[j]];
          s1 = e1.left === site ? e1.right : e1.left;
          if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
            triangles.push([site.data, s0.data, s1.data]);
          }
        }
      });
      return triangles;
    },
    links: function() {
      return this.edges.filter(function(edge) {
        return edge.right;
      }).map(function(edge) {
        return {
          source: edge.left.data,
          target: edge.right.data
        };
      });
    },
    find: function(x4, y4, radius) {
      var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;
      while (!(cell = that.cells[i1]))
        if (++i1 >= n)
          return null;
      var dx = x4 - cell.site[0], dy = y4 - cell.site[1], d2 = dx * dx + dy * dy;
      do {
        cell = that.cells[i0 = i1], i1 = null;
        cell.halfedges.forEach(function(e) {
          var edge = that.edges[e], v = edge.left;
          if ((v === cell.site || !v) && !(v = edge.right))
            return;
          var vx = x4 - v[0], vy = y4 - v[1], v2 = vx * vx + vy * vy;
          if (v2 < d2)
            d2 = v2, i1 = v.index;
        });
      } while (i1 !== null);
      that._found = i0;
      return radius == null || d2 <= radius * radius ? cell.site : null;
    }
  };

  // node_modules/d3-zoom/src/transform.js
  function Transform(k2, x4, y4) {
    this.k = k2;
    this.x = x4;
    this.y = y4;
  }
  Transform.prototype = {
    constructor: Transform,
    scale: function(k2) {
      return k2 === 1 ? this : new Transform(this.k * k2, this.x, this.y);
    },
    translate: function(x4, y4) {
      return x4 === 0 & y4 === 0 ? this : new Transform(this.k, this.x + this.k * x4, this.y + this.k * y4);
    },
    apply: function(point6) {
      return [point6[0] * this.k + this.x, point6[1] * this.k + this.y];
    },
    applyX: function(x4) {
      return x4 * this.k + this.x;
    },
    applyY: function(y4) {
      return y4 * this.k + this.y;
    },
    invert: function(location) {
      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function(x4) {
      return (x4 - this.x) / this.k;
    },
    invertY: function(y4) {
      return (y4 - this.y) / this.k;
    },
    rescaleX: function(x4) {
      return x4.copy().domain(x4.range().map(this.invertX, this).map(x4.invert, x4));
    },
    rescaleY: function(y4) {
      return y4.copy().domain(y4.range().map(this.invertY, this).map(y4.invert, y4));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var identity4 = new Transform(1, 0, 0);
  transform.prototype = Transform.prototype;
  function transform(node) {
    return node.__zoom || identity4;
  }

  // src/assets/trophy.png
  var trophy_default = "./trophy-6SI5DKNH.png";

  // src/radial-bracket.js
  function trans(x4, y4) {
    return "translate(" + x4 + "," + y4 + ")";
  }
  function toDegrees(radians2) {
    return radians2 * 180 / Math.PI;
  }
  var RadialBracket = class {
    constructor(teams, radius = 300, id2 = "#bracket", TEAM_INFO) {
      this.rootNode = hierarchy(teams);
      this.TEAM_INFO = TEAM_INFO;
      this.STYLE = {
        RADIUS: radius,
        DOM_ID: id2,
        DIAMOND_WIDTH: 3.3 * radius / 100,
        SPACE_BETWEEN_DOTS: 3.2 * (radius / 100),
        DOT_RADIUS: radius / 90,
        DOTS_DISTANCE: 12,
        TEXT_OFFSET: 25
      };
    }
    config(config) {
      this.STYLE = Object.assign(this.STYLE, config.style);
      if (config.TEAM_INFO)
        this.TEAM_INFO = config.TEAM_INFO;
      if (config.teams)
        this.rootNode = hierarchy(config.teams);
      return this;
    }
    getTeamInfo(d) {
      const name = d.data.name;
      if (name && this.TEAM_INFO[name])
        return this.TEAM_INFO[name];
      else
        return { abbreviation: name };
    }
    erase() {
      const { DOM_ID } = this.STYLE;
      select_default2(DOM_ID).selectAll("*").remove();
    }
    render() {
      this.erase();
      this.buildParitionLayout();
      this.appendSvg();
      this.addArcs();
      this.addText();
      this.addGamesWonDots();
      this.addGameDiamonds();
      this.addWinner();
    }
    buildParitionLayout() {
      const rootNode = this.rootNode;
      rootNode.sum((d) => d.children && d.children.length > 1 ? 0 : 1);
      const { RADIUS } = this.STYLE;
      this.partition = partition_default().size([2 * Math.PI, RADIUS]);
      this.partition(rootNode);
    }
    getArcGenerator() {
      return arc_default().startAngle((d) => d.x0).endAngle((d) => d.x1).innerRadius((d) => d.y0).outerRadius((d) => d.y1);
    }
    appendSvg() {
      const { RADIUS, DOM_ID } = this.STYLE;
      this.svg = select_default2(DOM_ID).append("svg").attr("viewBox", `0 0 ${RADIUS * 2 + 6} ${RADIUS * 2 + 6}`).append("g").attr("id", "center").attr("transform", trans(RADIUS + 3, RADIUS + 3));
    }
    addArcs() {
      const arcGenerator = this.getArcGenerator();
      const { rootNode } = this;
      select_default2("svg g").selectAll("path").data(rootNode.descendants()).enter().append("path").attr("d", arcGenerator).attr("class", (d) => {
        if (this.getTeamInfo(d).color1)
          return "round-arc";
        const colorRow = Math.log2(d.value) % 2 == 0;
        const color2 = colorRow ? "light-gray" : "dark-gray";
        return color2 + " round-arc";
      }).attr("fill", (d) => this.getTeamInfo(d).color1);
    }
    addText() {
      const { svg: svg2, rootNode } = this;
      const { TEXT_OFFSET } = this.STYLE;
      const arcGenerator = arc_default().startAngle((d) => d.x0).endAngle((d) => d.x1).innerRadius((d) => d.y0 + TEXT_OFFSET).outerRadius((d) => d.y0 + TEXT_OFFSET);
      const teamNameArc = svg2.append("g").attr("id", "team-names-arcs").selectAll("g").data(rootNode.descendants().slice(1)).enter().append("g");
      teamNameArc.append("defs").append("path").attr("d", arcGenerator).attr("id", (d) => `${d.data.name}${d.height}${(Number(d.x0 + d.x1) * 1e3).toFixed(0)}`);
      teamNameArc.append("text").append("textPath").attr("text-anchor", "middle").attr("startOffset", "25%").attr("class", "team-name").style("font-weight", "bold").attr("xlink:href", (d) => `#${d.data.name}${d.height}${(Number(d.x0 + d.x1) * 1e3).toFixed(0)}`).text((d) => this.getTeamInfo(d).abbreviation).attr("fill", (d) => this.getTeamInfo(d).color2);
    }
    // Add the counters. Had to pull out some geometry skills
    // to make this look good
    addGamesWonDots() {
      const { svg: svg2, rootNode } = this;
      const { DOT_RADIUS, SPACE_BETWEEN_DOTS, DOTS_DISTANCE } = this.STYLE;
      const init_offset = Math.PI / 40;
      const offset_list = [-1.5, -0.5, 0.5, 1.5];
      svg2.append("g").selectAll("g").data(rootNode.descendants().slice(1)).enter().append("g").selectAll("circle").data((d) => [d, d, d, d]).enter().append("circle").attr("class", "game-counter-dot").attr("r", DOT_RADIUS).attr("transform", (d, i) => {
        const y4 = d.y0 + DOTS_DISTANCE;
        const rotation = toDegrees((d.x0 + d.x1) / 2) - 90;
        let offset = init_offset + (SPACE_BETWEEN_DOTS - y4 * init_offset) / y4;
        offset *= offset_list[i];
        return `rotate(${rotation}) rotate(${toDegrees(offset)}) translate(${y4}, 0)`;
      }).style("opacity", (d, i) => {
        const points = d.data.points || 0;
        return i + 1 <= points ? 1 : 0.3;
      });
    }
    addGameDiamonds() {
      const { svg: svg2, rootNode } = this;
      const { DIAMOND_WIDTH } = this.STYLE;
      const HALF_DIAMOND_WIDTH = DIAMOND_WIDTH / 2;
      const winnerDiamonds = [{ x0: 0, y0: 70, y1: 70 }, { x0: Math.PI, y0: 70, y1: 70 }];
      const diamondData = rootNode.descendants().filter((team, i) => {
        return i >= 4 && i % 2 == 0;
      }).concat(winnerDiamonds);
      const rects = svg2.append("g");
      rects.selectAll("rect").data(diamondData).enter().append("rect").attr("width", DIAMOND_WIDTH).attr("height", DIAMOND_WIDTH).attr("transform", (d) => {
        const rotation = toDegrees(d.x0) - 90;
        const y4 = (d.y0 + d.y1) / 2 - HALF_DIAMOND_WIDTH;
        return `rotate(${rotation}) translate(0,${-HALF_DIAMOND_WIDTH}) translate(${y4}, 0) rotate(45 ${HALF_DIAMOND_WIDTH} ${HALF_DIAMOND_WIDTH})`;
      }).attr("fill", "#fff");
    }
    addWinner() {
      const { svg: svg2, rootNode } = this;
      const innerRadius = rootNode.y1;
      const innerDiameter = 2 * innerRadius;
      const imgHeight = innerDiameter - 25;
      const ratioOfImage = 256 / 470;
      const imgWidth = ratioOfImage * imgHeight;
      const winner = svg2.append("g").attr("id", "trophys");
      const winnerExists = rootNode.data.name;
      if (!winnerExists) {
        winner.append("circle").attr("class", "light-gray").attr("r", rootNode.y1 - 1);
      }
      winner.append("image").attr("xlink:href", trophy_default).attr("href", trophy_default).attr("height", imgHeight).attr("width", imgWidth).attr("transform", trans(-imgWidth / 2, -imgHeight / 2));
      if (winnerExists) {
        const diamondBg = color(this.getTeamInfo(rootNode).color1);
        diamondBg.opacity = 0.5;
        winner.append("rect").attr("width", innerRadius).attr("height", innerRadius).attr("fill", diamondBg).attr("class", "winner-diamond").attr("transform", (d) => `rotate(45) translate(-${innerRadius / 2}, -${innerRadius / 2})`);
        winner.append("text").text(this.getTeamInfo(rootNode).abbreviation).attr("text-anchor", "middle").attr("dy", "0.35em").attr("fill", (d) => this.getTeamInfo(rootNode).color2).attr("class", "team-name");
      }
    }
  };

  // src/assets/nba-playoffs.svg
  var nba_playoffs_default = "./nba-playoffs-57EJSIJ6.svg";

  // src/index.js
  document.getElementById("playoffs-logo").src = nba_playoffs_default;
  var didPlayoffsStart = (/* @__PURE__ */ new Date()).getMonth() >= 3;
  var currentYear = (/* @__PURE__ */ new Date()).getFullYear() - (didPlayoffsStart ? 0 : 1);
  var MILLISECONDS_IN_HOUR = 36e5;
  var RECHECK_TIME = 1 * MILLISECONDS_IN_HOUR;
  var bracket = new RadialBracket({}, 350, "#bracket", team_info_default);
  async function loadBracketForYear(year2) {
    const cachedTree = localStorage.getItem(year2);
    const lastFetchedTime = Number(localStorage.getItem("last_fetched"));
    const timeSinceFetch = (/* @__PURE__ */ new Date()).getTime() - lastFetchedTime;
    const yearElapsedCheck = year2 !== currentYear || year2 === currentYear && timeSinceFetch < RECHECK_TIME;
    const shouldGetFromCache = cachedTree && cachedTree !== "null" && cachedTree.length > 10 && yearElapsedCheck;
    if (shouldGetFromCache) {
      const teams = JSON.parse(cachedTree);
      bracket.config({ teams }).render();
    } else {
      const response = await fetch(
        `https://raw.githubusercontent.com/varughese/nba-radial-bracket/master/functions/scraper/cache/${year2}.json`
      );
      const teams = response.json();
      if (!teams)
        return;
      localStorage.setItem(year2, JSON.stringify(teams));
      localStorage.setItem("last_fetched", (/* @__PURE__ */ new Date()).getTime());
      bracket.config({ teams }).render();
    }
  }
  var yearDisplayed = currentYear;
  var $yearDisplayedTop = document.getElementById("year");
  var $prevYearText = document.getElementById("prev-year-text");
  var $nextYearText = document.getElementById("next-year-text");
  var $prevBtn = document.getElementById("yearleft");
  var $nextBtn = document.getElementById("yearright");
  window.changeYear = function(change) {
    if (yearDisplayed + change < 1990 || yearDisplayed + change > currentYear)
      return;
    yearDisplayed += change;
    loadBracketForYear(yearDisplayed);
    $yearDisplayedTop.textContent = yearDisplayed;
    $prevYearText.textContent = yearDisplayed - 1;
    $nextYearText.textContent = yearDisplayed + 1;
    if (yearDisplayed === currentYear) {
      $nextBtn.classList.add("invisible");
    } else {
      $nextBtn.classList.remove("invisible");
    }
    if (yearDisplayed === 1990) {
      $prevBtn.classList.add("invisible");
    } else {
      $prevBtn.classList.remove("invisible");
    }
  };
  function initialize() {
    window.changeYear(0);
  }
  initialize();
})();
