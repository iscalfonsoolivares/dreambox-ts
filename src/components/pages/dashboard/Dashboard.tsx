import React, { FC, useState,  useEffect, useMemo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Table, Menu, Icon, Form, Button, Label } from 'semantic-ui-react'
import { useTable, usePagination, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, Column  } from 'react-table';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { logoutThunk } from '../../../store/auth/authThunks';
import { getUserLoading, userList, message } from '../../../store/user/userSelector';
import { getUserThunk } from '../../../store/user/userThunks';
import { User, UserClearMessageAction } from '../../../store/user/userInterfaces';
import { createUserClearMessageAction } from '../../../store/user/userActionCreators';

interface DashboardPageMatchParams { };

interface DashboardPageProps extends RouteComponentProps< DashboardPageMatchParams > { };

const DashboardPage: FC< DashboardPageProps > = (): JSX.Element => {

  const dispatch = useDispatch();

  const handleSubmit =  () => {
    dispatch(logoutThunk());
  }

  const pageSizeSelector = 5;

  const [filter, setFilter] = useState<string>('');
  const messageSelector = useSelector(message);
  const getUserLoadingSelector = useSelector(getUserLoading);
  const userListSelector = useSelector(userList);

  const debouncedFilter = useAsyncDebounce((filterVal) => {
    setGlobalFilter(filterVal || undefined);
  }, 500);  

  const data = useMemo<User[]>(() => userListSelector, [userListSelector] )
  const columns = useMemo<Column<User>[]>(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Comapany',
        accessor: row => row.company?.name
      },
      {
        Header: 'City',
        accessor: row => row.address?.city
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      }
    ],
    []
  )

  useEffect(() => {
    if ( userListSelector.length === 0 ) dispatch< Function >( getUserThunk() );
  }, [dispatch, userListSelector]);

  useEffect(() => { 
    if (messageSelector) toast.error(messageSelector, { onClose: () => dispatch< UserClearMessageAction >( createUserClearMessageAction() ) });
  },[messageSelector, dispatch]);

  useEffect(() => {
    debouncedFilter(filter)
  }, [filter, debouncedFilter]);  

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    setPageSize,
    previousPage,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable<User>(
    { columns, data, initialState: { pageIndex: 0, pageSize: pageSizeSelector } }, 
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );


  return (
    <div className="dashboard" >
 
      <Grid container >
      <Grid.Row>
        <Grid.Column width='sixteen'>

          {
            pageSize === pageSizeSelector ? 
            <Button onClick={() => setPageSize(data.length)}>Ver todos</Button>
            :
            <Button onClick={() => setPageSize(pageSizeSelector)}>Paginado</Button>
          }

          <br />
          <button onClick={() => handleSubmit()}>
            Logout
          </button>

          <h1 style={{marginTop:'1rem'}}>
            { getUserLoadingSelector  ? 'loading' : `Usuarios ( ${userListSelector.length} )` }
          </h1>

          <Form>
            <Form.Field>
              <input 
                value={filter || ''}
                onChange={e => { setFilter(e.target.value) }}
                placeholder="Buscar" 
                type="text"
              />
            </Form.Field>
          </Form>

          <Table celled { ...getTableProps() } >
            <Table.Header>
              { 
                headerGroups.map( headerGroup => (
                    <Table.Row { ...headerGroup.getHeaderGroupProps() } >
                      {
                        headerGroup.headers.map( column => (
                            <Table.HeaderCell { ...column.getHeaderProps(column.getSortByToggleProps()) } >
                              { column.render('Header') }
                              <span style={{padding: '0 1rem'}}>
                                {
                                  column.isSorted
                                  ? column.isSortedDesc
                                    ? <Icon name='arrow alternate circle down' />
                                    : <Icon name='arrow alternate circle up' />
                                  : ''
                                }
                              </span>                              
                            </Table.HeaderCell>
                          )
                        )
                      }
                      <Table.HeaderCell >Actions</Table.HeaderCell>                      
                    </Table.Row>
                  )
                )
              }
            </Table.Header>
            <Table.Body {...getTableBodyProps()}>
              { 
                page.map( row => {

                  prepareRow( row );

                  return (
                    <Table.Row { ...row.getRowProps() } >
                      {
                        row.cells.map( cell => {
                          return (
                            <Table.Cell { ...cell.getCellProps() } >
                              { cell.render('Cell') }
                            </Table.Cell>
                          )
                        })
                      }
                      <Table.Cell>
                      
                      <Link to={`/user/${row.values.id}`}>Ver mas</Link>
                        
                      </Table.Cell>
                    </Table.Row>
                  )
                })
              }
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='6'>

                  <Menu pagination>
                    <Menu.Item as='a' icon onClick={() => gotoPage(0)} disabled={!canPreviousPage} >
                      <Icon name='angle double left' />
                    </Menu.Item>
                    <Menu.Item as='a' icon onClick={() => previousPage()} disabled={!canPreviousPage} >
                      <Icon name='angle left' />
                    </Menu.Item>
                    <Menu.Item as='a' icon onClick={() => nextPage()} disabled={!canNextPage} >
                      <Icon name='angle right' />
                    </Menu.Item>
                    <Menu.Item as='a' icon onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                      <Icon name='angle double right' />
                    </Menu.Item>
                  </Menu>

                  <Label>
                  En pantalla{' '} <strong>
                  {(pageIndex + 1) * pageSize - (pageSize - 1)}{' '}
                  - 
                  {' '}{pageSize === pageSizeSelector && rows.length > pageSize
                    ?
                    (pageIndex + 1) * pageSize - pageSize + page.length 
                    :
                    rows.length
                  }{' '}
                  de {' '} 
                  {rows.length}
                  {' '} 
                  </strong> usuarios </Label>
                
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table >

        </Grid.Column>
      </Grid.Row>
    </Grid>

    </div>
  );
}

export default DashboardPage;
