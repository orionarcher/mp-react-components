/**
 * Main app page for mp-react-component
 * Serves as a playground for testing and viewing components
 *
 * Experimental implementations of components are imported from the views directory
 * and rendered here.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.less';
import '../node_modules/bulma/css/bulma.min.css';
import '../node_modules/bulma-tooltip/dist/css/bulma-tooltip.min.css';
import { MaterialsExplorer } from './pages/MaterialsExplorer';
import { MoleculesExplorer } from './pages/MoleculesExplorer';
import { XasApp } from './pages/XasApp';
import { CrystalStructureViewer } from './pages/CrystalStructureViewer';
import { BatteryExplorer } from './pages/BatteryExplorer';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Publications } from './pages/Publications';
import { Sandbox } from './pages/Sandbox';
import { SynthesisExplorer } from './pages/SynthesisExplorer';
import { MPContribsSearch } from './pages/MPContribsSearch';
import { CatalystExplorer } from './pages/CatalystExplorer';
import { Navbar } from './components/navigation/Navbar';
import periodicTableImage from './assets/images/periodictable.png';

const mountNodeSelector = 'app';
const mountNode = document.getElementById(mountNodeSelector);

ReactDOM.render(
  <>
    <Router>
      <Navbar
        brandItem={{
          label: 'MP React',
          href: '/materials'
        }}
        items={[
          {
            label: 'Materials',
            href: '/materials'
          },
          {
            label: 'Molecules',
            href: '/molecules'
          },
          {
            label: 'Batteries',
            href: '/batteries'
          },
          {
            label: 'Synthesis',
            href: '/synthesis'
          },
          {
            label: 'Catalysts',
            href: '/catalysts'
          },
          {
            label: 'X-Ray Absorption Spectra',
            href: '/xas'
          },
          {
            icon: 'icon-fontastic-synthesis',
            href: '/catalysts'
          },
          {
            icon: 'icon-fontastic-synthesis',
            isRight: true,
            items: [
              {
                label: 'More',
                isMenuLabel: true
              },
              {
                label: 'Publications',
                href: '/publications'
              },
              {
                label: 'Contributions',
                href: '/contribs'
              },
              {
                label: 'Crystal Structure',
                href: '/crystal'
              },
              {
                label: 'Sandbox',
                href: '/sandbox'
              }
            ]
          }
        ]}
      />
      <section className="p-3">
        <Switch>
          <Route path="/materials">
            <MaterialsExplorer />
          </Route>
          <Route path="/molecules">
            <MoleculesExplorer />
          </Route>
          <Route path="/batteries">
            <BatteryExplorer />
          </Route>
          <Route path="/crystal">
            <CrystalStructureViewer />
          </Route>
          <Route path="/synthesis">
            <SynthesisExplorer />
          </Route>
          <Route path="/xas">
            <XasApp />
          </Route>
          <Route path="/publications">
            <Publications />
          </Route>
          <Route path="/contribs">
            <MPContribsSearch />
          </Route>
          <Route path="/catalysts">
            <CatalystExplorer />
          </Route>
          <Route path="/sandbox">
            <Sandbox />
          </Route>
          <Route path="/">
            <MaterialsExplorer />
          </Route>
        </Switch>
      </section>
    </Router>
  </>,

  mountNode
);
console.log('RUNNING in', process.env.NODE_ENV, 'DEBUGGING IS', process.env.DEBUG);
