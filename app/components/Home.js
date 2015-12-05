import React from 'react';
import { Navbar, NavBrand, Nav, NavItem } from 'react-bootstrap';
import LessonsTable from './LessonsTable';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lessons: [
      {
        "id": 0,
        "start_time": "2014-12-06T08:07:06 -11:00",
        "end_time": "2014-07-03T03:37:19 -10:00",
        "name": "laborum esse deserunt tempor elit",
        "steps": [
          {
            "type": "text",
            "data": "dolor dolore et enim commodo enim mollit sunt enim cillum officia laboris aliquip ipsum officia culpa eu culpa esse cupidatat",
            "sequence_no": 0
          },
          {
            "type": "photo",
            "data": "velit nostrud qui eiusmod aute est et occaecat qui reprehenderit nisi minim nisi velit tempor eiusmod aute velit ut esse",
            "sequence_no": 1
          },
          {
            "type": "text",
            "data": "est reprehenderit sint elit voluptate voluptate aliquip ex ut anim commodo eu pariatur consectetur excepteur fugiat eu culpa ad proident",
            "sequence_no": 2
          },
          {
            "type": "text",
            "data": "et reprehenderit amet dolor minim nostrud veniam sit in non aliqua occaecat laboris tempor non velit commodo laborum labore cupidatat",
            "sequence_no": 3
          },
          {
            "type": "text",
            "data": "eiusmod duis nisi tempor consectetur dolor eu duis sint ea voluptate officia et nulla in laboris dolore culpa minim ea",
            "sequence_no": 4
          },
          {
            "type": "photo",
            "data": "eiusmod dolore culpa minim cillum deserunt minim cupidatat occaecat nulla deserunt non fugiat reprehenderit est ex tempor dolor irure laboris",
            "sequence_no": 5
          },
          {
            "type": "text",
            "data": "reprehenderit sunt incididunt labore non esse amet anim qui culpa ex cupidatat adipisicing laborum fugiat sunt elit occaecat ex occaecat",
            "sequence_no": 6
          },
          {
            "type": "photo",
            "data": "non ullamco officia ut ea proident nostrud elit ea duis in proident esse nostrud aute nostrud eiusmod amet amet dolore",
            "sequence_no": 7
          }
        ]
      },
      {
        "id": 1,
        "start_time": "2014-02-13T04:59:39 -11:00",
        "end_time": "2015-07-14T11:02:09 -10:00",
        "name": "cupidatat aliqua deserunt laboris aliqua",
        "steps": [
          {
            "type": "text",
            "data": "aute culpa tempor irure est sit nostrud sit ea ipsum dolor tempor eu ut nisi consectetur pariatur proident commodo nulla",
            "sequence_no": 0
          },
          {
            "type": "text",
            "data": "adipisicing pariatur cillum quis aliquip magna consequat occaecat veniam consectetur culpa proident esse eu anim anim aliqua laborum tempor velit",
            "sequence_no": 1
          },
          {
            "type": "photo",
            "data": "adipisicing reprehenderit adipisicing et reprehenderit adipisicing pariatur ex minim eu veniam non mollit voluptate velit sit enim sunt excepteur tempor",
            "sequence_no": 2
          },
          {
            "type": "text",
            "data": "dolor proident nostrud ea deserunt nulla deserunt irure dolore enim sint esse reprehenderit deserunt fugiat deserunt et eu sunt voluptate",
            "sequence_no": 3
          },
          {
            "type": "text",
            "data": "laboris dolor est aute minim eiusmod exercitation aliquip eu et cupidatat sunt anim nostrud laboris laborum aliquip deserunt anim proident",
            "sequence_no": 4
          },
          {
            "type": "photo",
            "data": "voluptate aliquip amet ad do ullamco amet veniam ad ipsum adipisicing est ad ullamco culpa eu ut ullamco exercitation labore",
            "sequence_no": 5
          },
          {
            "type": "text",
            "data": "anim reprehenderit ad do minim veniam consectetur officia sit dolore dolore velit do minim exercitation dolore minim proident elit laboris",
            "sequence_no": 6
          },
          {
            "type": "text",
            "data": "velit officia et nostrud quis et aliqua do do cillum aute excepteur velit et adipisicing commodo consequat deserunt non enim",
            "sequence_no": 7
          },
          {
            "type": "photo",
            "data": "mollit cillum mollit sit amet minim mollit aliqua est exercitation proident cupidatat sunt eu magna non irure sit culpa sunt",
            "sequence_no": 8
          }
        ]
      },
      {
        "id": 2,
        "start_time": "2014-06-19T10:18:16 -10:00",
        "end_time": "2014-03-30T02:46:45 -11:00",
        "name": "elit ipsum consectetur deserunt anim",
        "steps": [
          {
            "type": "photo",
            "data": "voluptate nisi quis consectetur cillum ullamco reprehenderit ex elit sunt labore labore do mollit dolor ullamco Lorem ut in quis",
            "sequence_no": 0
          },
          {
            "type": "text",
            "data": "officia ad reprehenderit qui ipsum proident officia anim irure exercitation culpa nisi occaecat fugiat cillum sit est ut irure consectetur",
            "sequence_no": 1
          },
          {
            "type": "photo",
            "data": "aliqua quis esse id in do consequat nisi deserunt occaecat ipsum mollit minim et mollit tempor aliquip et enim incididunt",
            "sequence_no": 2
          },
          {
            "type": "photo",
            "data": "et eiusmod ad ut laborum labore eu fugiat consequat enim qui ad mollit dolore enim qui Lorem ullamco fugiat do",
            "sequence_no": 3
          },
          {
            "type": "text",
            "data": "pariatur est excepteur nisi elit voluptate fugiat in commodo enim mollit nostrud amet anim ad elit eu minim fugiat voluptate",
            "sequence_no": 4
          },
          {
            "type": "text",
            "data": "laboris cillum officia pariatur fugiat voluptate ea anim sint reprehenderit dolor veniam id ad excepteur deserunt esse sint tempor ad",
            "sequence_no": 5
          },
          {
            "type": "text",
            "data": "Lorem consectetur laborum quis tempor incididunt sit officia ad ex esse anim sint cupidatat et dolor ut enim irure sint",
            "sequence_no": 6
          }
        ]
      },
      {
        "id": 3,
        "start_time": "2014-08-18T12:36:30 -10:00",
        "end_time": "2014-01-09T09:25:00 -11:00",
        "name": "sit tempor ex voluptate occaecat",
        "steps": [
          {
            "type": "photo",
            "data": "qui ad laboris velit velit sint ut sunt id labore esse proident id ea ea officia fugiat Lorem ullamco veniam",
            "sequence_no": 0
          },
          {
            "type": "text",
            "data": "mollit excepteur non laborum id laboris quis id ex aliqua Lorem laborum sit fugiat quis dolor proident excepteur enim officia",
            "sequence_no": 1
          },
          {
            "type": "text",
            "data": "do enim nisi duis enim aute pariatur mollit quis consequat proident Lorem amet laborum in cillum mollit anim proident ullamco",
            "sequence_no": 2
          },
          {
            "type": "photo",
            "data": "consequat veniam eu est velit irure id sint ex eiusmod proident aute aliqua est ad dolor elit pariatur quis qui",
            "sequence_no": 3
          },
          {
            "type": "photo",
            "data": "sunt sunt est aliqua fugiat eu commodo quis excepteur excepteur aliquip laborum tempor Lorem aliqua exercitation sit voluptate laborum esse",
            "sequence_no": 4
          },
          {
            "type": "photo",
            "data": "aliquip et eu sint irure duis culpa ad veniam quis et commodo qui incididunt dolore duis et ullamco qui laborum",
            "sequence_no": 5
          },
          {
            "type": "text",
            "data": "ea magna laboris eiusmod pariatur do ex sit veniam eiusmod do enim Lorem consequat elit eiusmod quis laborum officia est",
            "sequence_no": 6
          },
          {
            "type": "text",
            "data": "laboris do non mollit commodo adipisicing minim duis ea aliqua do qui aute amet eu velit cillum qui sunt deserunt",
            "sequence_no": 7
          },
          {
            "type": "photo",
            "data": "aliquip officia nisi nulla voluptate culpa ut fugiat minim cupidatat in cupidatat culpa reprehenderit aliqua labore est ullamco ea cillum",
            "sequence_no": 8
          },
          {
            "type": "text",
            "data": "laborum reprehenderit velit aliquip commodo culpa reprehenderit irure consequat pariatur proident laborum aliquip magna minim exercitation officia adipisicing occaecat ullamco",
            "sequence_no": 9
          }
        ]
      },
      {
        "id": 4,
        "start_time": "2015-04-12T09:43:17 -10:00",
        "end_time": "2015-10-30T09:28:42 -11:00",
        "name": "nulla laborum magna nulla anim",
        "steps": [
          {
            "type": "photo",
            "data": "nisi occaecat culpa mollit ullamco ex fugiat incididunt sunt nulla sit esse ad dolore eiusmod Lorem deserunt sint aliquip minim",
            "sequence_no": 0
          },
          {
            "type": "text",
            "data": "voluptate excepteur proident excepteur aliquip ex irure consequat magna est anim commodo eu nostrud fugiat do sunt sit sit deserunt",
            "sequence_no": 1
          },
          {
            "type": "text",
            "data": "occaecat eiusmod do ex qui culpa sunt adipisicing ea eu tempor ut ipsum dolore duis laborum esse ipsum incididunt fugiat",
            "sequence_no": 2
          },
          {
            "type": "photo",
            "data": "sit minim sunt culpa aute nostrud excepteur aliquip voluptate ut ullamco id adipisicing do in duis esse ex aliquip ex",
            "sequence_no": 3
          },
          {
            "type": "photo",
            "data": "aute aliqua nisi laboris quis magna sunt eiusmod dolore dolor proident ut ad veniam ad sint labore Lorem excepteur nostrud",
            "sequence_no": 4
          },
          {
            "type": "photo",
            "data": "adipisicing esse quis voluptate tempor nostrud cillum nulla voluptate amet ea in enim cillum fugiat consectetur deserunt esse mollit laboris",
            "sequence_no": 5
          },
          {
            "type": "photo",
            "data": "commodo consectetur ex ex aliquip veniam ut est in culpa non sint qui non aute nostrud occaecat minim adipisicing nostrud",
            "sequence_no": 6
          }
        ]
      }
    ]};
  }
  render() {
    return (
      <div>
        <div className="header">
          <Navbar className="navbar-static-top">
            <NavBrand><a href="/"></a>RightClick Admin</NavBrand>
            <Nav>
              <NavItem eventKey={1} href="#">Dashboard</NavItem>
              <NavItem eventKey={2} href="#">Lesson History</NavItem>
            </Nav>
          </Navbar>
          <LessonsTable lessons={this.state.lessons}/>
        </div>
      </div>
    );
  }

  _handleTouchTap() {
    //this.refs.superSecretPasswordDialog.show();
  }
}

export default Home;
